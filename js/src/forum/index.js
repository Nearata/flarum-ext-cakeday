import { extend } from 'flarum/common/extend';

import Badge from 'flarum/common/components/Badge';
import User from 'flarum/common/models/User';

const memberDay = (today, joinTime) => {
    const days = app.forum.attribute('cakedayNewMembersDays');
    const endDate = window.dayjs(joinTime).add(days, 'day');

    return today < endDate;
};

app.initializers.add('nearata-cakeday', app => {
    extend(User.prototype, 'badges', function (items) {
        const joinTime = this.joinTime();

        const join = window.dayjs(joinTime);
        const today = window.dayjs();

        let label = app.translator.trans('nearata-cakeday.forum.anniversary');

        const isMemberDay = app.forum.attribute('cakedayNewMembers');
        const isSameYear = (today.year() === join.year() && memberDay(today, joinTime));

        if (isMemberDay && (isSameYear || memberDay(today, join))) {
            if (app.forum.attribute('cakedayNewMembersLabel')) {
                label = app.translator.trans('nearata-cakeday.forum.new_member_label');
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
