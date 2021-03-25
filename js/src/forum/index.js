import { extend } from 'flarum/common/extend';

import Badge from 'flarum/common/components/Badge';
import User from 'flarum/common/models/User';

app.initializers.add('nearata-cakeday', app => {
    extend(User.prototype, 'badges', function (items) {
        const joinTime = this.joinTime();

        const join = new Date(joinTime);
        const joinYear = join.getFullYear();

        const today = new Date();
        const todayYear = today.getFullYear();

        if (joinYear === todayYear && !app.forum.attribute('cakedayNewMembers')) {
            return;
        }

        const isMonth = join.getMonth() === today.getMonth();
        const isDay = join.getDate() === today.getDate();

        if (!(isMonth && isDay)) {
            return;
        }

        items.add(
            'nearataCakeday',
            m(Badge, {
                type: 'cakeday',
                icon: 'fas fa-birthday-cake',
                label: app.translator.trans('nearata-cakeday.forum.anniversary')
            })
        )
    });
});
