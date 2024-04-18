// randomise allocation of image numbers to stimuli numbers
var image_allocation = jsPsych.randomization.sampleWithoutReplacement([...Array(rune_images.length).keys()], n_runes_total);

// shuffle order of trials within each contingency
var shuffled_runsheet = [
  jsPsych.randomization.repeat(runsheet[0], 1),
  jsPsych.randomization.repeat(runsheet[1], 1),
  jsPsych.randomization.repeat(runsheet[2], 1),
  jsPsych.randomization.repeat(runsheet[3], 1)
];

// define what a block is; this effectively provides the arguments to be used when executing the timing task.
var block_1_all = shuffled_runsheet[0];
var block_2_all = shuffled_runsheet[1];
var block_3_all = shuffled_runsheet[2];
var block_4_all = shuffled_runsheet[3];

var all_trials = block_1_all.concat(block_2_all, block_3_all, block_4_all)

var block_1 = {
  timeline_variables: all_trials.slice(0,20),
  randomize_order: false,
  timeline:
  [{
    type: 'turk-timing',
    rune_images: rune_images,
    gem_images: gem_images,
    image_allocation: image_allocation, // uncomment to randomise rune images
    ship_images: ship_images,
    pickaxe_images: pickaxe_images,
    reward_window_duration: 1000,
    left_rune: jsPsych.timelineVariable('left_rune'), // a timeline variable is one that has a different value on each trial
    right_rune: jsPsych.timelineVariable('right_rune'),
    reward_start_time: jsPsych.timelineVariable('reward_start_time')
  }],
};

var block_2 = {
  timeline_variables: all_trials.slice(20,40),
  randomize_order: false,
  timeline:
  [{
    type: 'turk-timing',
    rune_images: rune_images,
    gem_images: gem_images,
    image_allocation: image_allocation, // uncomment to randomise rune images
    ship_images: ship_images,
    pickaxe_images: pickaxe_images,
    reward_window_duration: 150,
    left_rune: jsPsych.timelineVariable('left_rune'), // a timeline variable is one that has a different value on each trial
    right_rune: jsPsych.timelineVariable('right_rune'),
    reward_start_time: jsPsych.timelineVariable('reward_start_time')
  }],
};

var block_3 = {
  timeline_variables: all_trials.slice(40,60),
  randomize_order: false,
  timeline:
  [{
    type: 'turk-timing',
    rune_images: rune_images,
    gem_images: gem_images,
    image_allocation: image_allocation, // uncomment to randomise rune images
    ship_images: ship_images,
    reward_window_duration: 150,
    left_rune: jsPsych.timelineVariable('left_rune'), // a timeline variable is one that has a different value on each trial
    right_rune: jsPsych.timelineVariable('right_rune'),
    reward_start_time: jsPsych.timelineVariable('reward_start_time')
  }],
};

var block_4 = {
  timeline_variables: all_trials.slice(60,80),
  randomize_order: false,
  timeline:
  [{
    type: 'turk-timing',
    rune_images: rune_images,
    gem_images: gem_images,
    image_allocation: image_allocation, // uncomment to randomise rune images
    ship_images: ship_images,
    reward_window_duration: 150,
    left_rune: jsPsych.timelineVariable('left_rune'), // a timeline variable is one that has a different value on each trial
    right_rune: jsPsych.timelineVariable('right_rune'),
    reward_start_time: jsPsych.timelineVariable('reward_start_time')
  }],
};

var block_5 = {
  timeline_variables: all_trials.slice(80,100),
  randomize_order: false,
  timeline:
  [{
    type: 'turk-timing',
    rune_images: rune_images,
    gem_images: gem_images,
    image_allocation: image_allocation, // uncomment to randomise rune images
    ship_images: ship_images,
    reward_window_duration: 150,
    left_rune: jsPsych.timelineVariable('left_rune'), // a timeline variable is one that has a different value on each trial
    right_rune: jsPsych.timelineVariable('right_rune'),
    reward_start_time: jsPsych.timelineVariable('reward_start_time')
  }],
};

var block_6 = {
  timeline_variables: all_trials.slice(100,120),
  randomize_order: false,
  timeline:
  [{
    type: 'turk-timing',
    rune_images: rune_images,
    gem_images: gem_images,
    image_allocation: image_allocation, // uncomment to randomise rune images
    ship_images: ship_images,
    reward_window_duration: 150,
    left_rune: jsPsych.timelineVariable('left_rune'), // a timeline variable is one that has a different value on each trial
    right_rune: jsPsych.timelineVariable('right_rune'),
    reward_start_time: jsPsych.timelineVariable('reward_start_time')
  }],
};

var block_7 = {
  timeline_variables: all_trials.slice(120,140),
  randomize_order: false,
  timeline:
  [{
    type: 'turk-timing',
    rune_images: rune_images,
    gem_images: gem_images,
    image_allocation: image_allocation, // uncomment to randomise rune images
    ship_images: ship_images,
    reward_window_duration: 150,
    left_rune: jsPsych.timelineVariable('left_rune'), // a timeline variable is one that has a different value on each trial
    right_rune: jsPsych.timelineVariable('right_rune'),
    reward_start_time: jsPsych.timelineVariable('reward_start_time')
  }],
};

var block_8 = {
  timeline_variables: all_trials.slice(140,160),
  randomize_order: false,
  timeline:
  [{
    type: 'turk-timing',
    rune_images: rune_images,
    gem_images: gem_images,
    image_allocation: image_allocation, // uncomment to randomise rune images
    ship_images: ship_images,
    reward_window_duration: 150,
    left_rune: jsPsych.timelineVariable('left_rune'), // a timeline variable is one that has a different value on each trial
    right_rune: jsPsych.timelineVariable('right_rune'),
    reward_start_time: jsPsych.timelineVariable('reward_start_time')
  }],
};

var block_9 = {
  timeline_variables: all_trials.slice(160,180),
  randomize_order: false,
  timeline:
  [{
    type: 'turk-timing',
    rune_images: rune_images,
    gem_images: gem_images,
    image_allocation: image_allocation, // uncomment to randomise rune images
    ship_images: ship_images,
    reward_window_duration: 150,
    left_rune: jsPsych.timelineVariable('left_rune'), // a timeline variable is one that has a different value on each trial
    right_rune: jsPsych.timelineVariable('right_rune'),
    reward_start_time: jsPsych.timelineVariable('reward_start_time')
  }],
};
