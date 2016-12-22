'use strict';

alert('cool');

/*
 * src/Acme/Bundle/CustomBundle/Resources/public/js/product/field/range-field.js
 */
define([
        'pim/field',
        'underscore',
        'text!acme/template/product/field/range'
    ], function (
        Field,
        _,
        fieldTemplate
    ) {
        return Field.extend({
            fieldTemplate: _.template(fieldTemplate),
            events: {
                'change .field-input:first input[type="text"]': 'updateModel'
            },
            renderInput: function (context) {
                return this.fieldTemplate(context);
            },
            updateModel: function () {
                console.log(this);
                var data = this.$('.field-input:first input[type="text"]').val();

                this.setCurrentValue("1234567890");
            }
        });
    }
);