import Switch from 'flarum/common/components/Switch';

const isTrue = setting => {
    if (typeof setting === 'string') {
        return !!parseInt(setting);
    }

    if (typeof setting === 'boolean') {
        return setting;
    }
};

const trans = key => {
    return app.translator.trans(`nearata-cakeday.admin.settings.${key}`);
};

app.initializers.add('nearata-cakeday', app => {
    app.extensionData.for('nearata-cakeday')
        .registerSetting(
            {
                setting: 'nearata-cakeday.admin.new_members',
                label: trans('new_members'),
                type: 'boolean'
            }
        )
        .registerSetting(function () {
            const isNewMembers = this.setting('nearata-cakeday.admin.new_members')();
            return [
                isTrue(isNewMembers) ? [
                    m('.Form-group', [
                        m('label', trans('new_members_howlong')),
                        m('.helpText', trans('new_members_howlong_help')),
                        m('input', {
                            class: 'FormControl',
                            type: 'number',
                            bidi: this.setting('nearata-cakeday.admin.new_members_days'),
                            autocomplete: 'off',
                            placeholder: '7',
                            min: '1'
                        })
                    ]),
                    m('.Form-group', [
                        m(Switch, {
                            onchange: value => this.setting('nearata-cakeday.admin.new_members_label')(value),
                            state: this.setting('nearata-cakeday.admin.new_members_label')()
                        }, trans('new_members_changelabel'))
                    ])
                ] : null
            ];
        })
        .registerSetting(function () {
            return [
                m('.Form-group', [
                    m('label', trans('cake_bg_color_label')),
                    m('.helpText', trans('cake_bg_color_help')),
                    m('input', {
                        class: 'FormControl',
                        type: 'text',
                        bidi: this.setting('nearata-cakeday.admin.cake_bg_color'),
                        autocomplete: 'off',
                        placeholder: '#FFD449'
                    })
                ]),
                m('.Form-group', [
                    m('label', trans('cake_txt_color_label')),
                    m('.helpText', trans('cake_txt_color_help')),
                    m('input', {
                        class: 'FormControl',
                        type: 'text',
                        bidi: this.setting('nearata-cakeday.admin.cake_text_color'),
                        autocomplete: 'off',
                        placeholder: '#FFF'
                    })
                ])
            ]
        })
        .registerSetting(
            {
                setting: 'nearata-cakeday.admin.anniversaries_page',
                label: trans('anniversaries_page_label'),
                type: 'boolean'
            }
        )
        .registerPermission(
            {
                icon: 'fas fa-birthday-cake',
                label: app.translator.trans('nearata-cakeday.admin.permissions.can_view_anniversaries_page'),
                permission: 'nearata-cakeday.can_view_anniversaries_page'
            },
            'view'
        );
});
