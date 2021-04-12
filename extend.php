<?php

namespace Nearata\CakeDay;

use Flarum\Extend;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\User\Filter\UserFilterer;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/anniversaries', 'nearata_cakeday_anniversaries'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Settings())
        ->serializeToForum('cakedayNewMembers', 'nearata-cakeday.admin.new_members', 'boolval', false)
        ->serializeToForum('cakedayNewMembersDays', 'nearata-cakeday.admin.new_members_days', 'intval', 1)
        ->serializeToForum('cakedayNewMembersLabel', 'nearata-cakeday.admin.new_members_label', 'boolval', false)
        ->serializeToForum('cakedayBgColor', 'nearata-cakeday.admin.cake_bg_color', 'strval', '')
        ->serializeToForum('cakedayTextColor', 'nearata-cakeday.admin.cake_text_color', 'strval', '')
        ->serializeToForum('cakedayPageEnabled', 'nearata-cakeday.admin.anniversaries_page', 'boolval', false),
    (new Extend\Filter(UserFilterer::class))
        ->addFilter(CakedayFilter::class),
    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->attribute('canNearataCakedayViewPage', function (BasicUserSerializer $serializer) {
            return (bool) $serializer->getActor()->can('nearata-cakeday.can_view_anniversaries_page');
        })
];
