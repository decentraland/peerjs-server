import { expect } from 'chai';
import { HeartbeatHandler } from '../../../../src/messageHandler/handlers';
import { createClient } from '../../../utils';

describe('Heartbeat handler', () => {
    it('should update last ping time', () => {
        const client = createClient({});
        client.setLastPing(0);

        const nowTime = new Date().getTime();

        HeartbeatHandler(client);

        expect(client.getLastPing()).to.be.closeTo(nowTime, 2);
    });
});
