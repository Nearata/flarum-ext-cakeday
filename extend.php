<?php

namespace Nearata\CakeDay;

use Flarum\Extend;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\User\Filter\UserFilterer;
use Nearata\CakeDay\Api\Serializer\ExtendBasicUserSerializer;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/anniversaries', 'nearata_cakeday_anniversaries'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(ForumSettings::class),

    (new Extend\Filter(UserFilterer::class))
        ->addFilter(CakedayFilter::class),

    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->attributes(ExtendBasicUserSerializer::class)
];
