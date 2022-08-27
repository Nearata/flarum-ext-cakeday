import { NestedStringArray } from "@askvortsov/rich-icu-message-formatter";
import User from "flarum/common/models/User";
import app from "flarum/forum/app";

const trans = (key: string) => {
    return app.translator.trans(
        `nearata-cakeday.forum.page.filter_options.${key}`
    );
};

const text1 = (dayjs: any) => {
    const date = dayjs.format("ll");

    return app.translator.trans(
        "nearata-cakeday.forum.page.anniversaries_for_label",
        { date }
    );
};

const text2 = (dayjs1: any, dayjs2: any) => {
    const date1 = dayjs1.format("ll");
    const date2 = dayjs2.format("ll");

    return app.translator.trans(
        "nearata-cakeday.forum.page.anniversaries_between_label",
        { date1, date2 }
    );
};

/**
 * Based on FriendsOfFlarum's UserDirectoryState
 */

export default class AnniversariesState {
    users: Array<User>;
    loading: boolean;
    moreResults: boolean;
    currentFilter: string;

    constructor() {
        this.users = [];
        this.loading = false;
        this.moreResults = false;
        this.currentFilter = "today";
    }

    loadUsers() {
        app.store.find("users", this.getParams()).then(
            (users: any) => {
                this.users.push(...users);

                this.moreResults =
                    !!users.payload.links && !!users.payload.links.next;

                this.loading = false;

                m.redraw();
            },
            () => {
                this.loading = false;

                m.redraw();
            }
        );
    }

    refreshUsers() {
        this.loading = true;

        this.clearUsers();
        this.loadUsers();
    }

    hasMoreResults(): boolean {
        return this.moreResults;
    }

    clearUsers() {
        this.users = [];

        m.redraw();
    }

    isLoading(): boolean {
        return this.loading;
    }

    loadMore() {
        this.loading = true;
        this.loadUsers();
    }

    getParams(): any {
        const params: { [key: string]: any } = {};

        params["page"] = { offset: this.users.length };
        params["sort"] = "joinedAt";
        params["filter"] = { cakeday: this.currentFilter };

        return params;
    }

    getFilterOptions(): { [key: string]: any } {
        return {
            today: trans("today"),
            tomorrow: trans("tomorrow"),
            upcoming: trans("upcoming"),
            all: trans("all"),
        };
    }

    getCurrentFilter(): string {
        return this.currentFilter;
    }

    changeFilter(option: string) {
        this.currentFilter = option;
        this.refreshUsers();
    }

    isEmpty(): boolean {
        return this.users.length === 0 && !this.isLoading();
    }

    getH2(): NestedStringArray {
        const today = window.dayjs();
        const tomorrow = today.add(1, "day");
        const upcoming = tomorrow.add(1, "day");

        let text: string | NestedStringArray = "";

        switch (this.currentFilter) {
            case "today":
                text = text1(today);
                break;
            case "tomorrow":
                text = text1(tomorrow);
                break;
            case "upcoming":
                const upcomingTo = upcoming.add(1, "week");
                text = text2(upcoming, upcomingTo);
                break;
            case "all":
                const start = today.startOf("year");
                const end = today.endOf("year");
                text = text2(start, end);
                break;
            default:
                break;
        }

        return text;
    }
}
