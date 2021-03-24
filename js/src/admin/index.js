app.initializers.add('nearata-cakeday', app => {
    app.extensionData.for('nearata-cakeday')
        .registerSetting(
            {
                setting: 'nearata-cakeday.admin.new_members',
                label: app.translator.trans('nearata-cakeday.admin.new_members'),
                type: 'boolean'
            }
        )
});
