import Switch from 'flarum/common/components/Switch';

const isTrue = setting => {
    if (typeof setting === 'string') {
        return !!parseInt(setting);
    }

    if (typeof setting === 'boolean') {
        return setting;
    }
};

app.initializers.add('nearata-cakeday', app => {
    app.extensionData.for('nearata-cakeday')
        .registerSetting(
            {
                setting: 'nearata-cakeday.admin.new_members',
                label: app.translator.trans('nearata-cakeday.admin.new_members'),
                type: 'boolean'
            }
        )
        .registerSetting(function () {
            const isNewMembers = this.setting('nearata-cakeday.admin.new_members')();
            return [
                isTrue(isNewMembers) ? [
                    m('.Form-group', [
                        m('label', app.translator.trans('nearata-cakeday.admin.new_members_howlong')),
                        m('.helpText', app.translator.trans('nearata-cakeday.admin.new_members_howlong_helptext')),
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
                        }, app.translator.trans('nearata-cakeday.admin.new_members_changelabel'))
                    ])
                ] : null
            ];
        });
});
