import { PlayerName } from '../../models/index';

export default {
  Server: {
    playerName: async (parent, filter) => {
      return PlayerName.findOne({
        server: parent.id,
        name: filter.name
      });
    },

    playerNames: async (parent, filter) => {
      let query = { server: parent.id };
      if (filter.nameLike)
        query.name = new RegExp('.*' + filter.nameLike + '.*');
      return PlayerName.find(query);
    }
  },

  Player: {
    playerNames: async parent => {
      return PlayerName.find({
        server: parent.server,
        player: parent.guid
      });
    }
  }
};
