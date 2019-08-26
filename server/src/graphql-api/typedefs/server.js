import { gql } from 'apollo-server-koa';

export default gql`
  type Server {
    _id: String

    id: Int
    name: String

    welcomeMessage: String

    defaultBankGold: Int
    defaultPouchGold: Int
    defaultBankLimit: Int

    recordStats: Boolean

    serverStatsLite(startDate: Date, stopDate: Date): [ServerStats]

    serverStats(startDate: Date, stopDate: Date): [ServerStats]
      @fieldViewPermission(requiresAdminPermission: "viewServerStats")

    gameserverOnline: Boolean
    serverStatus: ServerStatus
    gameserverLastModule: String
      @fieldViewPermission(requiresAdminPermission: "viewServerFiles")
    gameserverLastConfig: String
      @fieldViewPermission(requiresAdminPermission: "viewServerFiles")

    apiKey: String @fieldViewPermission(requiresAdminPermission: "viewAPIKey")

    serverConfigFile(name: String!): ServerConfigFile
      @fieldViewPermission(requiresAdminPermission: "viewServerFiles")
    serverConfigFiles: [ServerConfigFile]
      @fieldViewPermission(requiresAdminPermission: "viewServerFiles")
    modules: [String]
      @fieldViewPermission(requiresAdminPermission: "viewServerFiles")

    player(guid: String!): Player
    players(guidLike: String): [Player]
    onlinePlayers: [Player]

    playerName(name: String!): PlayerName
    playerNames(nameLike: String): [PlayerName]

    ipRecords(ipMask: Int, ipLike: String): [IPRecord]
      @fieldViewPermission(requiresAdminPermission: "viewIPRecords")

    bans(player: String): [Ban]
      @fieldViewPermission(
        requiresAdminPermission: "viewBans"
        viewIfPlayer: true
      )
    warnings(player: String): [Warning]
      @fieldViewPermission(
        requiresAdminPermission: "viewWarnings"
        viewIfPlayer: true
      )
    notes(player: String): [Note]
      @fieldViewPermission(
        requiresAdminPermission: "viewNotes"
        viewIfPlayer: true
      )

    logSearch(searchString: String!): String
      @fieldViewPermission(requiresAdminPermission: "viewServerLogs")

    adminPermission(steamID: String!): AdminPermission
    adminPermissions: [AdminPermission]

    adminLogs(
      admin: String
      filter: [String]
      page: Boolean
      startingAfter: String
      endingBefore: String
    ): [AdminLog] @fieldViewPermission(requiresAdminPermission: "viewAdminLogs")
  }
`;
