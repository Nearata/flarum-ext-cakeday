import AnniversariesState from "../states/AnniversariesState";
import AnniversariesListItem from "./AnniversariesListItem";
import Component, { ComponentAttrs } from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import Placeholder from "flarum/common/components/Placeholder";
import app from "flarum/forum/app";

interface Attrs extends ComponentAttrs {
    state: AnniversariesState;
}

/**
 * Based on FriendsOfFlarum's UserDirectoryList
 */

export default class AnniversariesList extends Component<Attrs> {
    view() {
        const state = this.attrs.state;

        let loading;

        if (state.loading) {
            loading = m(LoadingIndicator);
        } else if (state.hasMoreResults()) {
            loading = m(
                Button,
                {
                    class: "Button",
                    onclick: state.loadMore.bind(state),
                },
                app.translator.trans(
                    "nearata-cakeday.forum.page.load_more_button"
                )
            );
        }

        if (state.isEmpty()) {
            const text = app.translator.trans(
                "nearata-cakeday.forum.page.empty"
            );
            return [
                m(".AnniversariesList", [
                    m("h2", state.getH2()),
                    m(Placeholder, { text: text }),
                ]),
            ];
        }

        return [
            m(".AnniversariesList", [
                m("h2", state.getH2()),
                m("ul.AnniversariesList-users", [
                    state.users.map((user) => {
                        return [
                            m(
                                "li",
                                {
                                    "data-id": user.id(),
                                },
                                m(AnniversariesListItem, { user: user })
                            ),
                        ];
                    }),
                ]),
                m(".AnniversariesList-loadMore", loading),
            ]),
        ];
    }
}
