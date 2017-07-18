import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-nav-bar-item', 'Integration | Component | paper nav bar item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paper-nav-bar-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paper-nav-bar-item}}
      template block text
    {{/paper-nav-bar-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
