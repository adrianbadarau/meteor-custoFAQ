Questions = new Mongo.Collection('questions',{});

Questions.attachSchema(new SimpleSchema({
	question:{
		type: String,
		max: 500,
		optional: false,
		label: "Question"
	},
	answer: {
		type: String,
		label: "Answer",
		optional: false,
	}
}))