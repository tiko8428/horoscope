const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const { dailyResolver } = require("../resolvers/dailyResolvers");
const {
  pastWeeklyResolver,
  currentWeeklyResolver
} = require("../resolvers/weeklyResolver");

const Sign = new GraphQLObjectType({
  name: "sign",
  description: "singel sign",
  fields: {
    yesterday: { type: GraphQLString },
    today: { type: GraphQLString },
    tomorrow: { type: GraphQLString },
    tomorrow02: { type: GraphQLString }
  }
});

const CategoryType = new GraphQLObjectType({
  name: "category",
  description: "category for weekly horoscope",
  fields: {
    common: { type: GraphQLString },
    business: { type: GraphQLString },
    love: { type: GraphQLString },
    car: { type: GraphQLString },
    health: { type: GraphQLString },
    beauty: { type: GraphQLString },
    erotic: { type: GraphQLString },
    gold: { type: GraphQLString }
  }
});

const SignsWeekly = new GraphQLObjectType({
  name: "SignsWeekly",
  description: "daily horoscope",
  fields: {
    aries: { type: CategoryType },
    taurus: { type: CategoryType },
    gemini: { type: CategoryType },
    cancer: { type: CategoryType },
    leo: { type: CategoryType },
    virgo: { type: CategoryType },
    libra: { type: CategoryType },
    scorpio: { type: CategoryType },
    sagittarius: { type: CategoryType },
    capricorn: { type: CategoryType },
    aquarius: { type: CategoryType },
    pisces: { type: CategoryType }
  }
});

const Signs = new GraphQLObjectType({
  name: "Signs",
  description: "daily horoscope",
  fields: {
    aries: { type: Sign },
    taurus: { type: Sign },
    gemini: { type: Sign },
    cancer: { type: Sign },
    leo: { type: Sign },
    virgo: { type: Sign },
    libra: { type: Sign },
    scorpio: { type: Sign },
    sagittarius: { type: Sign },
    capricorn: { type: Sign },
    aquarius: { type: Sign },
    pisces: { type: Sign }
  }
});

const DailyType = new GraphQLObjectType({
  name: "daily",
  description: "daily horoscope",
  fields: {
    common: { type: Signs, resolve: () => dailyResolver() },
    business: { type: Signs },
    love: { type: Signs },
    car: { type: Signs },
    health: { type: Signs },
    beauty: { type: Signs },
    erotic: { type: Signs },
    gold: { type: Signs }
  }
});

const WeeklyType = new GraphQLObjectType({
  name: "weekly",
  description: "weekly horoscope",
  fields: {
    current: {
      type: SignsWeekly,
      resolve: () => currentWeeklyResolver()
    },
    past: {
      type: SignsWeekly,
      resolve: () => pastWeeklyResolver()
    }
  }
});

const queryType = new GraphQLObjectType({
  name: "Query",
  description: "root query type",
  fields: {
    daily: {
      type: DailyType,
      resolve: () => "DailyType"
    },
    weekly: {
      type: WeeklyType,
      resolve: () => "WeeklyType"
    }
  }
});

const schema = new GraphQLSchema({
  query: queryType
});

module.exports = schema;
