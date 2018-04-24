import Route from '@ember/routing/route';

export default Route.extend({
	queryParams: {
    	from: {
      		refreshModel: true
    	},
    	size: {
      		refreshModel: true
    	}
  	},
    model(params) {
        return this.get('store').query('tree', {from: params.from, size: params.size})
            .then((results) => {
                return {
                    trees: results,
                    meta: results.get('meta')
                };
            });
      },
      setupController(controller, { trees, meta }) {
        this._super(controller, trees);
        controller.set('meta', meta);
      }
});
