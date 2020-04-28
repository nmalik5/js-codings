var pubsub = {};

(function (ps) {
    let topics = {};
    let subUid = -1;

    console.log(ps);
    ps.subscribe = function (topic, func) {
        if (topics[topic] === undefined)
            topics[topic] = [];

        let token = (++subUid).toString();

        topics[topic].push({
            func: func,
            token: token
        });

        return token;

    };

    ps.publish = function (topic, data) {

        if (topics[topic] === undefined)
            throw new Error(`${topic} topic not found`);

        let subscribers = topics[topic];
        let len = subscribers.length;

        for (let i = 0; i < len; i++) {
            let subscriber = subscribers[i];
            subscriber.func(topic, data);
        }

        return this;

    };

}(pubsub));

pubsub.subscribe('inbox/newMessage', function (topics, data) {
    console.log("Logging: " + topics + ": " + data.name);
});

pubsub.subscribe('inbox/readMessage', function (topics, data) {
    console.log("Read: " + topics + ": " + data);
});

pubsub.publish('inbox/newMessage', {
    name: 'navin'
});