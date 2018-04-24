import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['from', 'size'],
    from: 0,
    size: 3
});
