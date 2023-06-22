<?php

namespace Nearata\CakeDay\Api\Serializer;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;

class BasicUserSerializerAttributes
{
    public function __construct(protected SettingsRepositoryInterface $settings)
    {
    }

    public function __invoke(BasicUserSerializer $serializer, User $user, array $attributes)
    {
        return [
            'canNearataCakedayViewPage' => $user->isAdmin() ||
                (bool) $this->settings->get('nearata-cakeday.admin.anniversaries_page') &&
                $user->can('nearata-cakeday.can_view_anniversaries_page'),
        ];
    }
}
