import AnniversariesState from "../states/AnniversariesState";
import AnniversariesList from "./AnniversariesList";
import Button from "flarum/common/components/Button";
import Dropdown from "flarum/common/components/Dropdown";
import IndexPage from "flarum/common/components/IndexPage";
import listItems from "flarum/common/helpers/listItems";
import ItemList from "flarum/common/utils/ItemList";
import Page from "flarum/forum/components/Page";

/**
 * Based on FriendsOfFlarum's UserDirectoryPage
 */

export default class AnniversariesPage extends Page {
    oninit(vnode) {
        super.oninit(vnode);

        this.state = new AnniversariesState();
        this.state.refreshUsers();

        this.filterOptions = this.state.getFilterOptions();
        this.currentFilter = this.state.getCurrentFilter();
    }

    view() {
        return [
            m(".IndexPage", [
                IndexPage.prototype.hero(),
                m(".container", [
                    m(".sideNavContainer", [
                        m("nav.IndexPage-nav.sideNav", [
                            m("ul", listItems(this.sidebarItems().toArray())),
                        ]),
                        m(".IndexPage-results.sideNavOffset", [
                            m(".IndexPage-toolbar", [
                                m(
                                    "ul.IndexPage-toolbar-view",
                                    listItems(this.viewItems().toArray())
                                ),
                                m(
                                    "ul.IndexPage-toolbar-action",
                                    listItems(this.actionItems().toArray())
                                ),
                            ]),
                            m(AnniversariesList, { state: this.state }),
                        ]),
                    ]),
                ]),
            ]),
        ];
    }

    sidebarItems() {
        return IndexPage.prototype.sidebarItems();
    }

    viewItems() {
        const items = new ItemList();

        items.add(
            "sort",
            m(
                Dropdown,
                {
                    buttonClassName: "Button",
                    label: this.filterOptions[this.currentFilter],
                },
                Object.keys(this.filterOptions).map((value) => {
                    const label = this.filterOptions[value];
                    const active = this.currentFilter === value;

                    return m(
                        Button,
                        {
                            icon: active ? "fas fa-check" : true,
                            active: active,
                            onclick: () => {
                                this.changeFilter(value);
                            },
                        },
                        label
                    );
                })
            )
        );

        return items;
    }

    actionItems() {
        const items = new ItemList();

        items.add(
            "refresh",
            m(Button, {
                title: app.translator.trans("core.forum.index.refresh_tooltip"),
                icon: "fas fa-sync",
                class: "Button Button--icon",
                onclick: () => {
                    this.state.refreshUsers();
                },
            })
        );

        return items;
    }

    changeFilter(option) {
        this.state.changeFilter(option);
        this.currentFilter = this.state.getCurrentFilter();
    }
}
