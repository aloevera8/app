var response_options = ["Rarely/Never", "Occasionally", "Often", "Almost Always/Always"];

var bis_preamble = 'People differ in the ways they act and think in different situations.  This is a test to measure some of the ways in which you act and think.  Read each statement and check the answer that best describes you.  Do not spend too much time on any statement.  Answer quickly and honestly.'

var demographics_preamble = 'For each of the questions below, please choose the answer that best describes you or your experience of this HIT.'

var bis_survey_introduction = {
    type: "html-keyboard-response",
    stimulus: "Lastly, we would like you to answer several questions about yourself and about your experience of doing this HIT."
  };

var demographics_survey_partA = {
  type: 'survey-multi-choice',
  preamble: demographics_preamble,
  randomize_question_order: false,
  questions: [
    {prompt: "What is your sex?", options: ["Male", "Female", "Other", "Prefer not to answer"], required: true, horizontal: false, name: 'Sex'},
    {prompt: "What is your ethnicity?", options: ["Hispanic or Latino", "Not Hispanic or Latino", "Unknown", "Prefer not to answer"], required: true, horizontal: false, name: 'Ethnicity'},
    {prompt: "What is your race?", options: ["American Indian/Alaskan Native", "East Asian", "South Asian", "Native Hawaiian or other Pacific Islander", "Black or African American", "White", "More than one race", "Prefer not to answer"], required: true, horizontal: false, name: 'Race'},
    {prompt: "How did you feel about the clarity of the instructions?", options: ["I understood completely", "Pretty clear", "Somewhat clear", "Not very clear", "I didn't understand at all"], required: true, horizontal: false, name: 'Clarity'},
    {prompt: "How sleepy were you during the task?", options: ["I fell asleep", "Extremely sleepy", "Moderately sleepy", "Slightly sleepy", "Wide awake"], required: true, horizontal: false, name: 'Sleepiness'},
    {prompt: "How often did you disengage from the task?", options: ["I completely disengaged", "I often disengaged", "I sometimes disengaged", "I rarely disengaged", "I was completely engaged"], required: true, horizontal: false}
  ],
};

var demographics_survey_partB = {
  type: 'survey-text',
  questions: [
    {prompt: 'What is your age?', columns: 3, required: true, name: 'Age'},
    {prompt: 'Please describe any strategies that you used to perform the task, even if the strategy was not one we instructed you to use', rows:5, columns: 80, required: false, name: 'Strategy'},
    {prompt: 'Do you have any other feedback about the task?', rows: 5, columns: 80, required: false, name: 'Other feedback'},
  ],
  randomize_question_order: false
};


var bis_survey = {
  type: 'survey-multi-choice',
  preamble: bis_preamble,
  randomize_question_order: true,
  questions: [
    {prompt: "I plan tasks carefully.", options: response_options, required: true, horizontal: false, name: 'Q1'},
    {prompt: "I do things without thinking.", options: response_options, required: true, horizontal: false, name: 'Q2'},
    {prompt: "I make up my mind quickly.", options: response_options, required: true, horizontal: false, name: 'Q3'},
    {prompt: "I am happy-go-lucky.", options: response_options, required: true, horizontal: false, name: 'Q4'},
    {prompt: "I don't \'pay attention \'.", options: response_options, required: true, horizontal: false, name: 'Q5'},
    {prompt: "I have \'racing\' thoughts.", options: response_options, required: true, horizontal: false, name: 'Q6'},
    {prompt: "I plan trips well ahead of time.", options: response_options, required: true, horizontal: false, name: 'Q7'},
    {prompt: "I am self-controlled.", options: response_options, required: true, horizontal: false, name: 'Q8'},
    {prompt: "I concentrate easily.", options: response_options, required: true, horizontal: false, name: 'Q9'},
    {prompt: "I save regularly.", options: response_options, required: true, horizontal: false, name: 'Q10'},
    {prompt: "I \'squirm\' at plays and lecture. ", options: response_options, required: true, horizontal: false, name: 'Q11'},
    {prompt: "I am a careful thinker.", options: response_options, required: true, horizontal: false, name: 'Q12'},
    {prompt: "I plan for job security", options: response_options, required: true, horizontal: false, name: 'Q13'},
    {prompt: "I say things without thinking.", options: response_options, required: true, horizontal: false, name: 'Q14'},
    {prompt: "I like to think about complex problems.", options: response_options, required: true, horizontal: false, name: 'Q15'},
    {prompt: "I change jobs.", options: response_options, required: true, horizontal: false, name: 'Q16'},
    {prompt: "I act \'on impulse\'", options: response_options, required: true, horizontal: false, name: 'Q17'},
    {prompt: "I get easily bored when solving thought problems.", options: response_options, required: true, horizontal: false, name: 'Q18'},
    {prompt: "I act on the spur of the moment.", options: response_options, required: true, horizontal: false, name: 'Q19'},
    {prompt: "I am a steady thinker.", options: response_options, required: true, horizontal: false, name: 'Q20'},
    {prompt: "I change residences.", options: response_options, required: true, horizontal: false, name: 'Q21'},
    {prompt: "I buy things on impulse.", options: response_options, required: true, horizontal: false, name: 'Q22'},
    {prompt: "I can only think about one thing at a time.", options: response_options, required: true, horizontal: false, name: 'Q23'},
    {prompt: "I change hobbies.", options: response_options, required: true, horizontal: false, name: 'Q24'},
    {prompt: "I spend or charge more than I earn.", options: response_options, required: true, horizontal: false, name: 'Q25'},
    {prompt: "I often have extraneous thoughts when thinking.", options: response_options, required: true, horizontal: false, name: 'Q26'},
    {prompt: "I am more interested in the present than the future.", options: response_options, required: true, horizontal: false, name: 'Q27'},
    {prompt: "I am restless at the theater or lectures.", options: response_options, required: true, horizontal: false, name: 'Q28'},
    {prompt: "I like puzzles.", options: response_options, required: true, horizontal: false, name: 'Q29'},
    {prompt: "I am future oriented.", options: response_options, required: true, horizontal: false, name: 'Q30'}
  ],
};
