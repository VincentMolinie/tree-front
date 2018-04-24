import Component from '@ember/component';

export default Component.extend({
    tagName: 'ul',
	classNames: ['pagination', 'center'],
	total: 0,
    size: 3,
	didReceiveAttrs() {
		if (!this.get('from')) {
			this.set('from', 0);
		}
	},
	nbPages: Ember.computed('total', 'size', function() {
		const total = this.get('total');
		const size = this.get('size');
		return Math.ceil(total / size);
    }),
    page: Ember.computed('from', 'size', function() {
		const from = this.get('from');
        const size = this.get('size');
        console.log('refresh page');
		return Math.floor(from / size) + 1;        
    }),
	listNumberPage: Ember.computed('nbPages', 'page', function() {
		const nbPages = this.get('nbPages');
		const page = this.get('page');
		const listNumberPages = [];

		if (!nbPages) {
			return listNumberPages;
		}

		listNumberPages.pushObject(1);
		if (page - 3 > 1) {
			listNumberPages.pushObject(0);
		}
		for (let i = Math.max(2, page - 2); i <= page + 2 && i <= nbPages; i += 1) {
			listNumberPages.pushObject(i);
		}
		if (nbPages > page + 3) {
			listNumberPages.pushObject(0);
		}
		if (nbPages > page + 2) {
			listNumberPages.pushObject(nbPages);
		}

		return listNumberPages;
	}),
	actions: {
		incrPage: function() {
			let from = this.get('from');
            const total = this.get('total');
            const size = this.get('size');
			if ((from + size) < total) {
				from += size;
				this.set('from', from);
			}
		},
		decrPage: function() {
			let from = this.get('from');
			if (from > 0) {
                from = Math.max(0, from - this.get('size'));
				this.set('from', from);
			}
		},
		selectPage: function(page) {
            this.set('from', (page - 1) * this.get('size'))
		}
	}
});
