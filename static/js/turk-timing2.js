jsPsych.plugins['turk-timing2'] = (function() {

    var plugin = {};
  
    // get jsPsych to preload the images
    jsPsych.pluginAPI.registerPreload('turk-timing2', 'rune_images', 'image');
    jsPsych.pluginAPI.registerPreload('turk-timing2', 'gem_images', 'image');
    jsPsych.pluginAPI.registerPreload('turk-timing2', 'ship_images', 'image');
    jsPsych.pluginAPI.registerPreload('turk-timing2', 'pickaxe_images', 'image');
  
    // the entries in this array are the different parameters of the plugin; they be either specified when the plugin is loaded, but if not they will take the default values as specified here
    plugin.info = {
      name: 'turk-timing2',
      parameters: {
        stimuli: {
          type:jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
          default: null,
          description: 'The array of paths to stimuli'
        },
        rune_images: {
          type:jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
          default: null,
          description: 'The array of paths to feedback images'
        },
        gem_images: {
          type:jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
          default: null,
          description: 'The array of paths to gem images'
        },
        ship_images: {
          type:jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
          default: null,
          description: 'The array of paths to ship images'
        },
        pickaxe_images: {
          type:jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
          default: null,
          description: 'The array of paths to pickaxe images'
        },
        image_allocation: {
          type:jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
          default: [0, 1, 2, 3],
          description: 'The mapping to subject-specific images (allows randomisation of visual stimuli)'
        },
        canvas_dimensions: {
          type:jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
          default: [1000, 600],
          description: 'The dimensions [width, height] of the html canvas on which things are drawn'
        },
        background_colour: {
          type: jsPsych.plugins.parameterType.STRING,
          default: '#878787',
          description: 'The colour of the background'
        },
        planet_offset: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Planet offset',
          default: [250, 0],
          description: 'The offset [horizontal, vertica] of the centre of each planet from the centre of the canvas in pixels'
        },
        pickaxe_offset: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Pickaxe offset',
          default: [220, 0],
          description: 'The offset [horizontal, vertica] of the centre of each planet from the centre of the canvas in pixels'
        },
        ship_offset: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Stimulus offset',
          default: [0, 200],
          description: 'The offset [horizontal, vertica] of the ship stimulus from the centre of the canvas in pixels'
        },
        ship_dimensions: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Stimulus offset',
          default: [300, 300],
          description: 'The dimensions [horizontal, vertica] of the ship stimulus'
        },
        ship_speed: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Stimulus offset',
          default: -20,
          description: 'Movement of the ship per interval'
        },
        planet_radius: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Planet radius',
          default: 80,
          description: 'The radius in pixels of each planet'
        },
        planet_background_colour: {
          type: jsPsych.plugins.parameterType.STRING,
          default: '#FFFFFF', // #FFFFFF is white
          description: 'The colour of the planet background'
        },
        planet_unselected_colour: {
          type: jsPsych.plugins.parameterType.STRING,
          default: '#8bb047', // #FFFFFF is white
          description: 'The colour of the planet outline when unselected'
        },
        planet_outline_width: {
          type: jsPsych.plugins.parameterType.INT,
          default: 30,
          description: 'The width of the planet outline (in pixels)'
        },
        planet_selected_colour: {
          type: jsPsych.plugins.parameterType.STRING,
          default: '#f28237', // #FFFFFF is white
          description: 'The colour of the planet outline when selected'
        },
        rune_dimensions: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Rune dimensions',
          default: [77, 100],
          description: 'Rune dimensions in pixels [width, height]'
        },
        planet_gem_dimensions: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Planet gem dimensions',
          default: [75, 100],
          description: 'Dimensions of the gem in pixels [width, height] when it appears on a planet'
        },
        award_gem_dimensions: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Award gem dimensions',
          default: [175, 240],
          description: 'Dimensions of the gem in pixels [width, height] when it appears after having been awarded'
        },
        pickaxe_dimensions: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Pickaxe dimensions',
          default: [75, 100],
          description: 'Dimensions of the pickaxe in pixels [width, height] when it appears after mining planet'
        },
        left_key: {
          type: jsPsych.plugins.parameterType.KEYCODE,
          pretty_name: 'Left key',
          default: 'leftarrow',
          description: 'The key to be pressed to select the left planet'
        },
        right_key: {
          type: jsPsych.plugins.parameterType.KEYCODE,
          pretty_name: 'Right key',
          default: 'rightarrow',
          description: 'The key to be pressed to select the right planet'
        },
        press_key: {
          type: jsPsych.plugins.parameterType.KEYCODE,
          pretty_name: 'Press key',
          default: 'space',
          description: 'The key to be pressed to attain the rune'
        },
        press_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Press duration',
          default: 1000,
          description: 'How long space bar presses are valid (in milliseconds)'
        },
        choice_listen_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Choice window duration',
          default: 100000,
          description: 'How long to wait for a response (in milliseconds).'
        },
        post_gem_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Choice display duration',
          default: 2000,
          description: 'How long to display the choice options (before the READY screen) after the last gem has disappeared (in milliseconds).'
        },
        iti_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Duration of inter-trial interval',
          default: 2000,
          description: 'How long to display a blank screen between trials (in milliseconds).'
        },
        award_gem_offset: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Feedback offset',
          default: [0, -200],
          description: 'The offset [horizontal, vertica] of the awarded gem from the centre of the canvas in pixels'
        },
        award_gem_duration: {
          type: jsPsych.plugins.parameterType.INT,
          default: 400,
          description: 'How long to display the award gem for (in milliseconds).'
        },
        reward_window_duration: {
          type: jsPsych.plugins.parameterType.INT,
          default: 250,
          //default: 5000,
          description: 'How long to display the gems for (in milliseconds).'
        },
        feedback_height: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Feedback dimensions',
          default: 150,
          description: 'Desired height of feedback image(in pixels)'
        }
      }
    }
  
    // this defines the sequence of things that will happen on each trial
    plugin.trial = function(display_element, trial) {
  
      // add a canvas to the HTML_STRING, store its context, and draw a blank background
      var new_html = '<canvas id="trial_canvas" width="'+trial.canvas_dimensions[0]+'" height="'+trial.canvas_dimensions[1]+'"></canvas>';
      display_element.innerHTML = new_html;
      var ctx = document.getElementById('trial_canvas').getContext('2d');
  
      // increment the trial gem_counter
      anon.trial_counter += 1
  
      // set up a container for key responses
      var response = {
        rune_choice: null,
        choice: null,
        rt: null,
        got_gem: [false]
      };
  
      // set up a container for display configuration
      var display = {
        left_planet: false,
        right_planet: false,
        left_rune: false,
        right_rune: false,
        left_gem: false,
        right_gem: false,
        gem_counter: 0,
        left_colour: trial.planet_unselected_colour,
        right_colour: trial.planet_unselected_colour,
        award_gem: false,
        max_gems: 0,
        gems_won: 0,
        ship: true,
        ship_movement_offset: [0,0],
        ship_image: [trial.ship_images[0]],
        pickaxe: false,
        ready_text: false
      }
  
      var valid_responses = [];
      if (!isNaN(trial.left_rune)){
        display.left_planet = true;
        display.left_rune = true
        valid_responses.push(trial.left_key)
      }
      if (!isNaN(trial.right_rune)){
        display.right_planet = true;
        display.right_rune = true
        valid_responses.push(trial.right_key)
      }
  
      // create an empty variable to hold the sequence of button presses
      var all_response_times = [];
      var accumulated_delay = 0;
  
      // draw pre-choice screen
      _DrawScreen();
  
      // start the response listener
      // listener for initial rune selection
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: AfterResponse,
        valid_responses: valid_responses,
        rt_method: 'performance',
        persist: true, // make persist false so that only first valid press counts
        //persist: false,
        allow_held_key: false
      });
  
      // set a timeout function to end the trial after a given time if no response is recorded
      if (trial.choice_listen_duration !== null) {
  
        jsPsych.pluginAPI.setTimeout(function() {
          EndTrial();
        }, trial.choice_listen_duration);
  
      } //end if-loop
  
      ///// CONTROL FLOW FUNCTIONS /////
  
      // executed after a rune is selected
      // function to handle responses by the subject
      function AfterResponse(info) {
  
        // kill any remaining setTimeout handlers
        jsPsych.pluginAPI.clearAllTimeouts();
  
        // specify which key was pressed
        response.key_char = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key);
        response.rt = info.rt;
  
        // assign response variables
        if (response.key_char == trial.left_key){
  
          response.choice = 'left';
          response.rune_choice = trial.left_rune;
          display.right_planet = false;
          display.left_colour = trial.planet_selected_colour;
          display.left_rune = false;
        } else if (response.key_char == trial.right_key){
  
          response.choice = 'right';
          response.rune_choice = trial.right_rune;
          display.left_planet = false;
          display.right_colour = trial.planet_selected_colour;
          display.right_rune = false;
        }
  
        _StartTimer();
  
      }; // end AfterResponse
  

        // function to show an empty screen for the duration of the inter-trial interval
      function ITI() {
  
        display.left_planet = false;
        display.right_planet = false;
        display.award_gem = false;
        display.ready_text = true;
  
        // draw the background of the canvas
        _DrawBackground();
        _DrawScreen();
  
        move_ship = function(){
  
          // move ship
          display.ship_movement_offset[1] = display.ship_movement_offset[1] + trial.ship_speed;
  
          // check if off-screen
          if (trial.ship_offset[1] + display.ship_movement_offset[1] < -2*trial.ship_dimensions[1]){
            display.ship = false;
          }
  
        }
  
        draw_ship = function(){
          // check to see if it is out of bounds
          _DrawScreen();
        }
  
        // start the response listener
        var itiListener = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: function(info){
  
            response.ready_rt = info.rt
  
            // clear keyboard listener
            jsPsych.pluginAPI.cancelKeyboardResponse(itiListener);
  
            display.ready_text = false;
            display.ship_image = [trial.ship_images[1]];
  
  
            drawing = setInterval(draw_ship,35)
            movement = setInterval(move_ship,35)
  
            // set a timeout to end the ITI after a given delay
            jsPsych.pluginAPI.setTimeout(function() {
  
              clearInterval(drawing);
              clearInterval(movement);
              EndTrial();
  
            }, trial.iti_duration);
  
          },
          valid_responses: jsPsych.ALL_KEYS,
          rt_method: 'performance',
          persist: true,
          allow_held_key: false
        });
  
      }; // end EndTrial function
  
      // function to end trial when it is time
      function EndTrial() {
  
        // clear keyboard listener
        jsPsych.pluginAPI.cancelAllKeyboardResponses();
  
        // kill any remaining setTimeout handlers
        jsPsych.pluginAPI.clearAllTimeouts();
  
        // gather the data to store for the trial
        var trial_data = {
          trial: anon.trial_counter,
          left_rune: trial.left_rune,
          right_rune: trial.right_rune,
          displayed_left_rune: trial.image_allocation[trial.left_rune],
          displayed_right_rune: trial.image_allocation[trial.right_rune],
          choice: response.choice,
          rune_choice: response.rune_choice,
          rt: response.rt,
          ready_rt: response.ready_rt,
          got_gem: response.got_gem,
          //points_earned: ,
          reward_start_time: trial.reward_start_time[response.rune_choice],
          response_times: all_response_times
        };
  
        // move on to the next trial
        jsPsych.finishTrial(trial_data);
  
      }; // end EndTrial function
  
      ///// UTILITY FUNCTIONS /////
  
      // function to draw the stimuli to screen flexibly
      function _DrawScreen() {
  
        // background
        _DrawBackground();
  
        // gem counter
        if (anon.gem_total != null){
          ctx.font = "20px Arial";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          var info_text = anon.gem_total + " gems won";
          ctx.fillText(info_text, 2 * ctx.measureText(info_text).width / 3, 3* ctx.measureText('M').width/2);
        }
  
        // left planet
        if (display.left_planet){
          ctx.strokeStyle = display.left_colour;
          ctx.lineWidth = trial.planet_outline_width;
          ctx.fillStyle = trial.planet_background_colour;
          ctx.beginPath();
          ctx.arc(trial.canvas_dimensions[0] / 2 - trial.planet_offset[0], trial.canvas_dimensions[1]/2 + trial.planet_offset[1], trial.planet_radius, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.fill();
  
          // left rune
          if (display.left_rune){
            _DrawStimulus([trial.rune_images[trial.image_allocation[trial.left_rune]]], [-trial.planet_offset[0], trial.planet_offset[1]], trial.rune_dimensions);
          };
  
          // left gem
          if (display.left_gem){
            _DrawStimulus([trial.gem_images[0]], [-trial.planet_offset[0], trial.planet_offset[1]], trial.planet_gem_dimensions);
          };
  
          // pickaxe
          if (display.pickaxe){
            _DrawStimulus([trial.pickaxe_images[0]], [-trial.planet_offset[0], trial.planet_offset[1]], trial.planet_gem_dimensions);
          }
        };
  
        if (display.right_planet){
  
          // right planet
          ctx.strokeStyle = display.right_colour;
          ctx.lineWidth = trial.planet_outline_width;
          ctx.fillStyle = trial.planet_background_colour;
          ctx.beginPath();
          ctx.arc(trial.canvas_dimensions[0] / 2 + trial.planet_offset[0], trial.canvas_dimensions[1]/2 + trial.planet_offset[1], trial.planet_radius, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.fill();
  
          // right rune
          if (display.right_rune){
            _DrawStimulus([trial.rune_images[trial.image_allocation[trial.right_rune]]], trial.planet_offset, trial.rune_dimensions);
          }
  
          // right gem
          if (display.right_gem){
            _DrawStimulus([trial.gem_images[0]], trial.planet_offset, trial.planet_gem_dimensions);
          }
  
          // pickaxe
          if (display.pickaxe){
            _DrawStimulus([trial.pickaxe_images[0]], trial.planet_offset, trial.planet_gem_dimensions)
          };
  
        };
  
        // top gem
        // if (display.award_gem){
        //   _DrawStimulus([trial.gem_images[0]], trial.award_gem_offset, trial.award_gem_dimensions);
        // };
  
        // spaceship
        if (display.ship){
          _DrawStimulus(display.ship_image, [trial.ship_offset[0] + display.ship_movement_offset[0], trial.ship_offset[1] + display.ship_movement_offset[1]], trial.ship_dimensions);
        };
  
        // ready text
        if (display.ready_text){
          ctx.font = "36px Arial";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.fillText('READY', trial.canvas_dimensions[0] / 2, trial.canvas_dimensions[1] / 2);
        }
  
      }; // end _DrawScreen function
  
      function _DrawStimulus(stimulus_array, stimulus_offset, image_dimensions) {
  
        // array sanity check: only draw a stimulus array if (a) the array exists, and (b) the array has a length greater than 0
        if (Array.isArray(stimulus_array) && stimulus_array.length > 0) {
  
          // create new image element
          var img = new Image();
  
          // specify that the image should be drawn once it is loaded
          img.onload = function(){_ImageOnload(img, image_dimensions, stimulus_offset)};
  
          // set the source path of the image; in JavaScript, this command also triggers the loading of the image
          img.src = stimulus_array[0];
  
        } // end array sanity check if-loop
  
      } // end _DrawStimulus function
  
  
      // function to draw background
      function _DrawBackground(){
  
        // draw the background
        ctx.fillStyle = trial.background_colour;
        ctx.fillRect(0, 0, trial.canvas_dimensions[0], trial.canvas_dimensions[1]);

      }; // end _DrawBackground function
  
  
      function _ImageOnload(im, image_dimensions, image_offset){
        var stim_horiz_loc = (trial.canvas_dimensions[0]/2) + image_offset[0]  - (image_dimensions[0] / 2); // specifies the x coordinate of the top left corner of the stimulus
        var stim_vert_loc = (trial.canvas_dimensions[1]/2) + image_offset[1] - (image_dimensions[1] / 2); // specifies the y coordinate of the top left corner of the stimulus
        ctx.drawImage(im, stim_horiz_loc, stim_vert_loc, image_dimensions[0], image_dimensions[1]);
  
      } // end _StimulusOnload function
  
      function _DrawFeedbackScreen(){
        _DrawBackground();
        ctx.font = "36px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        var info_text = display.gems_won + " out of " + display.max_gems + " gems earned";
        ctx.fillText(info_text, trial.canvas_dimensions[0] / 2, trial.canvas_dimensions[1] / 2);

        var endListener = jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: function(info){
              EndTrial();
            },
            valid_responses: jsPsych.ALL_KEYS,
            rt_method: 'performance',
            persist: true,
            allow_held_key: false
          });

        jsPsych.pluginAPI.setTimeout(function() {
            EndTrial();
        }, trial.choice_listen_duration);

      }
  
      // Scoring function: late responses allowed, but points are discounted exponentially
      function _lateExpDecay(press_start, press_end, gem_start, gem_end, threshold=500, decay_rate=.5){
        display.gems_won = 0;
        response.got_gem[response.got_gem.length - 1] = false;
        var max_score = display.max_gems;
        var time_after = gem_end - press_start;
  
        // press is perfectly within reward window, earns max points
        if ((press_start <= gem_end) && (gem_start <= press_end)) {
          display.gems_won = max_score;
          response.got_gem[response.got_gem.length - 1] = true;
        }
  
        // press is after reward window, earns discounted amount of points
        else if (press_start > gem_end) {
          if (time_after < threshold) {
            display.gems_won = max_score * Math.pow(decay_rate, time_after);
            response.got_gem[response.got_gem.length - 1] = true;
          }
        }
  
        // update counter with all gems won
        anon.gem_total += display.gems_won;
      }
  
      // draw new screen with selected rune only
      // set up response listener for reward gem, call _GemTimerCascade to trigger actual appearance/disappearance
      // called every time a reward gem should appear 
      function _StartTimer(){
  
        var is_final_gem = display.gem_counter == (trial.reward_start_time[response.rune_choice].length - 1)
        _DrawScreen();
  
        // start the response listener
        if (is_final_gem) {
            var pressListener = jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: function(info){
        
                  all_response_times.push(info.rt);
        
                  var press_start = info.rt + accumulated_delay;
                  var press_end = info + trial.press_duration + accumulated_delay;
                  var gem_start = trial.reward_start_time[response.rune_choice][display.gem_counter];
                  var gem_end = trial.reward_start_time[response.rune_choice][display.gem_counter] + trial.reward_window_duration;
              
                  display.max_gems = 1;
        
                  // once gem is mined, display axe on-screen
                  display.pickaxe = true;
                  _DrawScreen();
        
                  // determine how many gems earned/points scored
                  _lateExpDecay(press_start, press_end, gem_start, gem_end);
        
                  // cut to feedback screen
                  _DrawFeedbackScreen();
                },
                valid_responses: [trial.press_key],
                rt_method: 'performance',
                //persist: true,
                persist: false,
                allow_held_key: false
              });
        }
        else {
            var pressListener = jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: function(info){
        
                  all_response_times.push(info.rt);
        
                  var press_start = info.rt + accumulated_delay;
                  var press_end = info + trial.press_duration + accumulated_delay;
                  var gem_start = trial.reward_start_time[response.rune_choice][display.gem_counter];
                  var gem_end = trial.reward_start_time[response.rune_choice][display.gem_counter] + trial.reward_window_duration;
              
                  display.max_gems = 1;
        
                  // once gem is mined, display axe on-screen
                  display.pickaxe = true;

                  // determine how many gems earned/points scored
                  _lateExpDecay(press_start, press_end, gem_start, gem_end);

                  // show pickaxe on screen
                  _DrawScreen();
        
                  // set timeout for pickaxe
                  jsPsych.pluginAPI.setTimeout(function(){
                    display.pickaxe = false;
                    _DrawScreen();
                  }, trial.press_duration)
                },
                valid_responses: [trial.press_key],
                rt_method: 'performance',
                //persist: true,
                persist: false,
                allow_held_key: false
              });
        }
  
        //_GemTimerCascade(is_final_gem, trial.reward_start_time[response.rune_choice][display.gem_counter] - accumulated_delay);
        _showGem(is_final_gem, trial.reward_start_time[response.rune_choice][display.gem_counter]);
      }; // end _StartTimer
  
      function _showGem(final_gem, time_to_reward_start){
        jsPsych.pluginAPI.setTimeout(function() {
  
            // show gem
            if (response.choice == 'left'){
              display.left_gem = true;
            } else if (response.choice == 'right'){
              display.right_gem = true;
            }
            _DrawScreen()
  
            // time before disappearance of gem
            jsPsych.pluginAPI.setTimeout(function() {
  
              // clear keyboard listener
              //jsPsych.pluginAPI.cancelAllKeyboardResponses();
              jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener)
  
              // hide gem
              display.left_gem = false;
              display.right_gem = false;
  
              _DrawScreen();

              jsPsych.pluginAPI.setTimeout(function() {
                accumulated_delay += post_gem_duration

                // if this was the final gem to be shown, display the ITI; otherwise, run the timer cascade again with an incremented gem counter
                if (final_gem){
                  // kill any remaining setTimeout handlers
                  jsPsych.pluginAPI.clearAllTimeouts();

                  // go to ITI
                  _DrawFeedbackScreen();

                } else {
                  display.gem_counter += 1
                  response.got_gem.push(false)

                  _StartTimer();

                }
              }, post_gem_duration);
            }, trial.reward_window_duration); // end gem on timer
          }, time_to_reward_start);
    }
      // control reward gem appearance + disappearance, transition to ITI/end of trial if applicable
      // called every time a reward gem should appear
      function _GemTimerCascade(final_gem, time_to_reward_start) {
  
          if (final_gem){
            var post_gem_duration = trial.post_gem_duration
          } else {
            var post_gem_duration = 0
          }
  
          // time before appearance of gem
          jsPsych.pluginAPI.setTimeout(function() {
  
            // show gem
            if (response.choice == 'left'){
              display.left_gem = true;
            } else if (response.choice == 'right'){
              display.right_gem = true;
            }
            _DrawScreen()
  
            // time before disappearance of gem
            jsPsych.pluginAPI.setTimeout(function() {
  
              // clear keyboard listener
              //jsPsych.pluginAPI.cancelAllKeyboardResponses();
              jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener)
  
              // hide gem
              display.left_gem = false;
              display.right_gem = false;
  
              _DrawScreen();
  
              // time before disappearance of reward gem (if applicable)
              jsPsych.pluginAPI.setTimeout(function() {
  
                accumulated_delay += trial.award_gem_duration
  
                if (display.award_gem == true & anon.gem_total != null){
                  anon.gem_total += 1
                }
  
                //display.award_gem = false;
                //display.award_notif = false;
                _DrawScreen();
  
                // post-gem-disappearance lull time
                jsPsych.pluginAPI.setTimeout(function() {
  
                  accumulated_delay += post_gem_duration
  
                  // if this was the final gem to be shown, display the ITI; otherwise, run the timer cascade again with an incremented gem counter
                  if (final_gem){
  
                    // kill any remaining setTimeout handlers
                    jsPsych.pluginAPI.clearAllTimeouts();
  
                    // go to ITI
                    ITI();
  
                  } else {
  
                    display.gem_counter += 1
                    response.got_gem.push(false)
  
                    _StartTimer();
  
                  }
  
                }, post_gem_duration); // end gem off timer
  
              }, trial.award_gem_duration); // end award gem off timer
  
            }, trial.reward_window_duration); // end gem on timer
  
          }, time_to_reward_start); // end pre-gem timer
  
      }; // end _GemTimerCascade
  
    } // end plugin.trial
  
    return plugin;
  
  })(); // end plugin function
  