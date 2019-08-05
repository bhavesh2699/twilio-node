'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Webhook', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 5,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'next_page_url': null,
              'key': 'webhooks'
          },
          'webhooks': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'target': 'webhook',
                  'configuration': {
                      'url': 'https://example.com',
                      'method': 'get',
                      'filters': [
                          'onMessageSent',
                          'onConversationDestroyed'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'target': 'trigger',
                  'configuration': {
                      'url': 'https://example.com',
                      'method': 'post',
                      'filters': [
                          'keyword1',
                          'keyword2'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'target': 'studio',
                  'configuration': {
                      'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .webhooks.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 5,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'next_page_url': null,
              'key': 'webhooks'
          },
          'webhooks': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'target': 'webhook',
                  'configuration': {
                      'url': 'https://example.com',
                      'method': 'get',
                      'filters': [
                          'onMessageSent',
                          'onConversationDestroyed'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'target': 'trigger',
                  'configuration': {
                      'url': 'https://example.com',
                      'method': 'post',
                      'filters': [
                          'keyword1',
                          'keyword2'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'target': 'studio',
                  'configuration': {
                      'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .webhooks.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://conversations.twilio.com/v1/Conversations/${conversationSid}/Webhooks',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 5,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'next_page_url': null,
              'key': 'webhooks'
          },
          'webhooks': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'target': 'webhook',
                  'configuration': {
                      'url': 'https://example.com',
                      'method': 'get',
                      'filters': [
                          'onMessageSent',
                          'onConversationDestroyed'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'target': 'trigger',
                  'configuration': {
                      'url': 'https://example.com',
                      'method': 'post',
                      'filters': [
                          'keyword1',
                          'keyword2'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'target': 'studio',
                  'configuration': {
                      'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .webhooks.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .webhooks.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var conversationSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${conversationSid}/Webhooks`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 5,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'next_page_url': null,
              'key': 'webhooks'
          },
          'webhooks': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'target': 'webhook',
                  'configuration': {
                      'url': 'https://example.com',
                      'method': 'get',
                      'filters': [
                          'onMessageSent',
                          'onConversationDestroyed'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'target': 'trigger',
                  'configuration': {
                      'url': 'https://example.com',
                      'method': 'post',
                      'filters': [
                          'keyword1',
                          'keyword2'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'target': 'studio',
                  'configuration': {
                      'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .webhooks.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 5,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'webhooks'
          },
          'webhooks': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .webhooks.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var conversationSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${conversationSid}/Webhooks/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'target': 'studio',
          'configuration': {
              'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          'date_created': '2016-03-24T21:05:50Z',
          'date_updated': '2016-03-24T21:05:50Z',
          'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {target: 'webhook'};
      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .webhooks.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var conversationSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${conversationSid}/Webhooks`;

      var values = {Target: 'webhook', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'target': 'webhook',
          'configuration': {
              'url': 'https://example.com',
              'method': 'get',
              'filters': [
                  'onMessageSent',
                  'onConversationDestroyed'
              ]
          },
          'date_created': '2016-03-24T21:05:50Z',
          'date_updated': '2016-03-24T21:05:50Z',
          'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {target: 'webhook'};
      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .webhooks.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var conversationSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${conversationSid}/Webhooks/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'target': 'trigger',
          'configuration': {
              'url': 'https://example.com',
              'method': 'post',
              'filters': [
                  'keyword1',
                  'keyword2'
              ]
          },
          'date_created': '2016-03-24T21:05:50Z',
          'date_updated': '2016-03-24T21:05:51Z',
          'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var conversationSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${conversationSid}/Webhooks/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});