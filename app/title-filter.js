angular.module('Zoolandia')
    .filter('titleFilter', () => {
        return (title) => {
            first = title.slice(0, 1);
            title = title.slice(1, title.length);
            first = first.toUpperCase();
            capsTitle = first + title;
            return capsTitle;
        }
    })
