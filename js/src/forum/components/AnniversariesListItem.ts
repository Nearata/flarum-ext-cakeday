import Component, { ComponentAttrs } from "flarum/common/Component";
import avatar from "flarum/common/helpers/avatar";
import User from "flarum/common/models/User";

interface Attrs extends ComponentAttrs {
    user: User;
}

/**
 * Based on FriendsOfFlarum's UserDirectoryListItem
 */

export default class UserDirectoryListItem extends Component<Attrs> {
    user!: User;

    view() {
        const user = this.attrs.user;
        const todayYear = window.dayjs().year();

        const getFormattedDate = (date: any) => {
            return window.dayjs(date).year(todayYear).format("YYYY-MM-DD");
        };

        return [
            m(".user", [
                m(".avatar", avatar(user, { title: "" })),
                m("", [
                    m(".username", user.username()),
                    m(
                        ".joinTime",
                        getFormattedDate(user.attribute("joinTime"))
                    ),
                ]),
            ]),
        ];
    }
}
