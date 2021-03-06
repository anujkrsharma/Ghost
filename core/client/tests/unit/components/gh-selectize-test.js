/* jshint expr:true */
import { expect } from 'chai';
import {
    describeComponent,
    it
} from 'ember-mocha';
import Ember from 'ember';

const {run} = Ember;

describeComponent(
    'gh-selectize',
    'Unit: Component: gh-selectize',
    {
        // Specify the other units that are required for this test
        // needs: ['component:foo', 'helper:bar'],
        unit: true
    },
    function () {
        it('re-orders selection when selectize order is changed', function () {
            const component = this.subject();

            run(() => {
                component.set('content', Ember.A(['item 1', 'item 2', 'item 3']));
                component.set('selection', Ember.A(['item 2', 'item 3']));
                component.set('multiple', true);
            });

            this.render();

            run(() => {
                component._selectize.setValue(['item 3', 'item 2']);
            });

            expect(component.get('value'), 'component value').to.deep.equal(['item 3', 'item 2']);
            expect(component.get('selection'), 'component selection').to.deep.equal(['item 3', 'item 2']);
        });
    }
);
