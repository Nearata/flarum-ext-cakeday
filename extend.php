<?php

namespace Nearata\CakeDay;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Settings())
        ->serializeToForum('cakedayNewMembers', 'nearata-cakeday.admin.new_members', 'boolval', false)
        ->serializeToForum('cakedayNewMembersDays', 'nearata-cakeday.admin.new_members_days', 'intval', 1)
        ->serializeToForum('cakedayNewMembersLabel', 'nearata-cakeday.admin.new_members_label', 'boolval', false)
        ->serializeToForum('cakedayBgColor', 'nearata-cakeday.admin.cake_bg_color', 'strval', '')
        ->serializeToForum('cakedayTextColor', 'nearata-cakeday.admin.cake_text_color', 'strval', '')
];
