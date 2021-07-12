<?php

namespace Nearata\CakeDay;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;

class ForumSettings
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(ForumSerializer $serializer): array
    {
        $attributes = [];

        $attributes['cakedayNewMembers'] = (bool) $this->settings->get('nearata-cakeday.admin.new_members', false);
        $attributes['cakedayNewMembersDays'] = (int) $this->settings->get('nearata-cakeday.admin.new_members_days', 1);
        $attributes['cakedayNewMembersLabel'] = (bool) $this->settings->get('nearata-cakeday.admin.new_members_label', false);
        $attributes['cakedayBgColor'] = (string) $this->settings->get('nearata-cakeday.admin.cake_bg_color', '');
        $attributes['cakedayTextColor'] = (string) $this->settings->get('nearata-cakeday.admin.cake_text_color', '');
        $attributes['cakedayPageEnabled'] = (bool) $this->settings->get('nearata-cakeday.admin.anniversaries_page', false);

        return $attributes;
    }
}
