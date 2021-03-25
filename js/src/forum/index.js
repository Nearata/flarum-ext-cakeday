import { extend } from 'flarum/common/extend';

import Badge from 'flarum/common/components/Badge';
import User from 'flarum/common/models/User';

app.initializers.add('nearata-cakeday', app => {
    extend(User.prototype, 'badges', function (items) {
        const joinTime = this.joinTime();

        const join = window.dayjs(joinTime);
        const today = window.dayjs();

        let label = app.translator.trans('nearata-cakeday.forum.anniversary');

        if (today.year() === join.year() && app.forum.attribute('cakedayNewMembers')) {
            const days = app.forum.attribute('cakedayNewMembersDays');
            const endDate = window.dayjs(joinTime).add(days, 'day');

            if (app.forum.attribute('cakedayNewMembersLabel')) {
                label = app.translator.trans('nearata-cakeday.forum.new_member_label');
            }

            if (today > endDate) {
                return;
            }
        } else {
            const isMonth = join.month() === today.month();
            const isDay = join.date() === today.date();

            if (!(isMonth && isDay)) {
                return;
            }
        }

        items.add(
            'nearataCakeday',
            m(Badge, {
                type: 'cakeday',
                icon: 'fas fa-birthday-cake',
                label: label
            })
        )
    });
});
