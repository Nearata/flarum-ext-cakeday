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

    public function __invoke(ForumSerializer $serializer, array $model, array $attributes): array
    {
        return [
            'cakedayNewMembers' => (bool) $this->settings->get('nearata-cakeday.admin.new_members'),
            'cakedayNewMembersDays' => (int) $this->settings->get('nearata-cakeday.admin.new_members_days'),
            'cakedayNewMembersLabel' => (bool) $this->settings->get('nearata-cakeday.admin.new_members_label'),
            'cakedayBgColor' => (string) $this->settings->get('nearata-cakeday.admin.cake_bg_color'),
            'cakedayTextColor' => (string) $this->settings->get('nearata-cakeday.admin.cake_text_color'),
            'cakedayPageEnabled' => (bool) $this->settings->get('nearata-cakeday.admin.anniversaries_page')
        ];
    }
}
