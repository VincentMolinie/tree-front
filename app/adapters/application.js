import DS from 'ember-data';
import ENV from 'tree-front/config/environment';


export default DS.JSONAPIAdapter.extend({
    host: ENV.host,
});
