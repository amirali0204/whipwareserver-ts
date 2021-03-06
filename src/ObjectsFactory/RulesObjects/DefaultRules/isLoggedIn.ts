export const m_isLoggedIn = {
    conditions: {
        any: [{
          all: [{
            fact: "gameDuration",
            operator: "equal",
            value: 40
          }, {
            fact: "personalFoulCount",
            operator: "greaterThanInclusive",
            value: 5
          }]
        }, {
          all: [{
            fact: "gameDuration",
            operator: "equal",
            value: 48
          }, {
            fact: "personalFoulCount",
            operator: "greaterThanInclusive",
            value: 6
          }]
        }]
      },
      event: {  // define the event to fire when the conditions evaluate truthy
        type: "fouledOut",
        params: {
          message: "Player has fouled out!"
        }
      }
};
