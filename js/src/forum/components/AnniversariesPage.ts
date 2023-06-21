import AnniversariesState from "../states/AnniversariesState";
import AnniversariesList from "./AnniversariesList";
import Button from "flarum/common/components/Button";
import Dropdown from "flarum/common/components/Dropdown";
import Page from "flarum/common/components/Page";
import listItems from "flarum/common/helpers/listItems";
import ItemList from "flarum/common/utils/ItemList";
import app from "flarum/forum/app";
import IndexPage from "flarum/forum/components/IndexPage";

/**
 * Based on FriendsOfFlarum's UserDirectoryPage
 */

export default class AnniversariesPage extends Page {
  anniversariesState!: AnniversariesState;
  filterOptions!: { [key: string]: any };
  currentFilter!: string;

  oninit(vnode: any) {
    super.oninit(vnode);

    this.anniversariesState = new AnniversariesState();
    this.anniversariesState.refreshUsers();

    this.filterOptions = this.anniversariesState.getFilterOptions();
    this.currentFilter = this.anniversariesState.getCurrentFilter();
  }

  oncreate(vnode: any) {
    super.oncreate(vnode);

    // @ts-ignore
    app.setTitle(app.translator.trans("nearata-cakeday.forum.page.title"));
    app.setTitleCount(0);
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
              m(AnniversariesList, {
                state: this.anniversariesState,
              }),
            ]),
          ]),
        ]),
      ]),
    ];
  }

  sidebarItems() {
    return IndexPage.prototype.sidebarItems();
  }

  viewItems(): ItemList<any> {
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

  actionItems(): ItemList<any> {
    const items = new ItemList();

    items.add(
      "refresh",
      m(Button, {
        title: app.translator.trans("core.forum.index.refresh_tooltip"),
        icon: "fas fa-sync",
        class: "Button Button--icon",
        onclick: () => {
          this.anniversariesState.refreshUsers();
        },
      })
    );

    return items;
  }

  changeFilter(option: string) {
    this.anniversariesState.changeFilter(option);
    this.currentFilter = this.anniversariesState.getCurrentFilter();
  }
}
