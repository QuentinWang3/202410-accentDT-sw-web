/*
- goal: This JS file is designed for a accent discrimination task used to probe L2 learners' capability to differentiate different L2 English accents as well as the difference between native speakers' accent and L2 English accents.
- created: 2024-11-05
- modified: 2024-12-05
- change log:
    2024-11-28
    - (done) preload at one time
    - (done) mark different phases (data:{phase: prac/experiment})
    2024-12-05
    - add break time
    - (done) description of "訛りの発音" (accented speech)
    - (done) add informed consent
    - add background information collection
    TODO
    - move experiment to github (complicated)

*/



const jsPsych = initJsPsych({
    use_webaudio:false,
    on_finish: function(){
        jsPsych.data.displayData();
    },
});

/* init connection with pavlovia.org */
var pavlovia_init = {
    type: jsPsychPavlovia,
    command: "init",
};

var prac_audio_preload = 
prac_timeline_variable.map(function(obj){
    return [obj.Sound1, obj.Sound2];
}).flat(1);

var main_audio_preload = 
main_timeline_variable.map(function(obj){
    return [obj.Sound1, obj.Sound2];
}).flat(1);

//done - preload practice & main trial at the same time
    //concatenate two preload dataset
var all_audio_preload = prac_audio_preload.concat(main_audio_preload);


var preload = {
    type: jsPsychPreload,
    audio: all_audio_preload,
};


//fullscreen before experiment
var fullscreen = {
    type: jsPsychFullscreen,
    message: `
    <h1 style="font-size: 40px; text-align: left;">
    実験を始める前に：本実験の注意事項
    </h1>
    <p>
    ☑️ Macの場合は、お手数をおかけしますが、Safari以外のブラウザがおすすめです。
    ☑️ ヘッドホンのご装着をお願いいたします。
    ☑️ スマホや他のスマートデバイスをミュートにしていただけますよう、お願いいたします。
    ☑️ 実験が終わる前に、全画面モードの終了や他のアプリのご使用をお控えますよう、よろしくお願いいたします。

    上記の注意事項を確認済みであれば、下のボタンをクリックすると、ブラウザが全画面モードに変わります。
    </p>`,
    button_label: "注意事項を全部確認しました。全画面モードに入ります。"

};

//Introduction
var title = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1 style = "font-size: 60px; width: 100%;">英語発音の知覚実験</h1>
    `,
    choices: [],
    trial_duration: 2000,
};


var instruction_1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1>
    インストラクション
    </h1>
    <div>
    <p style="width:100%">
    この実験では２つの英語の音声がペアで流されます。

    流された２つの音声を聞き、

    違う訛りの英語発音ペアであれば<span style="background-color: yellow;">[ F ]キー</span>を、

    同じ訛りの英語発音ペアであれば <span style="background-color: yellow;">[ J ]キー</span>を<u>できるだけ早く正確に</u>押してください。

    この実験では同じ発音／違う発音の判断をする際の正答率が記録されます。
    </p>
    </div>
    `,
    choices: ['「訛りの発音」次のページへ'],
}

var instruction_2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1>
    インストラクション：訛りの発音とは？
    </h1>
    <div>
    <p>
    以下の内容に対するご理解は、本実験の結果に重要な影響がありますので、読んでいただけますよう、よろしくお願いいたします。

    本実験では、「訛り」というのは、母語話者の発音のバリエーションではなく、母語が異なる話者が持つ「母語訛り」のことを指しています。母語話者の発音は地域によって、多くのバリエーションが存在しますが、本研究が重視しているのは母語話者と非母語話者の英語発音の違い、かつ母語が異なる非母語話者間の違いです。

    つまり、「違う訛りの英語発音ペア」というのは母語話者と非母語話者の英語発音ペア、あるいはA母語の非母語話者とB母語の非母語話者の英語発音ペアです。

    上記の内容が理解できましたら、下のボタンを押すと、実験に関する説明に入ります。
    </p>
    </div>
    `,
    choices: ['理解できました、次のページへ'],
}


var instruction_3 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1>
    実験に関するご説明
    </h1>
    <div>
    <p>
    音声は常に凝視点（＋）の直後に流されますので、凝視点（＋）が提示されたら、必ずそのポイントに注目してください。

    この発音知覚実験はおおむね４０分程度で終了の予定ですが、途中で休憩ポイントが1回あります。
    休憩ポイントでは遠慮なく休憩してください（例：目を閉じるや深呼吸等）。

    ボタンを早く押すために、常に[ F ]と[ J ]のキーの上に指を置いてください。
    まず実験の手順に慣れていただくために、練習を１２問準備しました。
    準備ができましたら、 [ J ] キーを押して練習へ進んでください。
    </p>
    </div>
    `,
    choices: ['練習のセッションへ']
}


//block 1 - practice

//fixation
var fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:`
    <h1 style= "font-size: 50px">
    +
    </h1>`,
    choices: "NO_KEYS",
    trial_duration: 1000
};

//play sound1 in prac
var prac_sound1 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable('Sound1'),
    choices: 'NO_KEYS',
    prompt: `
    <h1>練習：訛りの発音を聞いてください</h1>    
    <div>
    <p style="width: 100%"> 
    違う訛りの英語発音であれば<span style="background-color: yellow;">[ F ]キー</span>を、同じ訛りの英語発音であれば <span style="background-color: yellow;">[ J ]キー</span>を<u>押してください</u>。
    </p>`,
    trial_ends_after_audio: true
};

//play sound2 in prac

var prac_sound2 = {
    type:jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable('Sound2'),
    choices: 'NO_KEYS',
    prompt: `
    <h1>練習：訛りの発音を聞いてください</h1>    
    <div>
    <p style="width: 100%"> 
    違う訛りの英語発音であれば<span style="background-color: yellow;">[ F ]キー</span>を、同じ訛りの英語発音であれば <span style="background-color: yellow;">[ J ]キー</span>を<u>押してください</u>。
    </p>`,
    trial_ends_after_audio: true
};

//response in prac (mark practice block as "practice" in response)
var prac_response = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>練習：弁別してください！</h1>    
    <div>
    <p style="width: 100%"> 
    違う訛りの英語発音であれば<span style="background-color: yellow;">[ F ]キー</span>を、同じ訛りの英語発音であれば <span style="background-color: yellow;">[ J ]キー</span>を<u>押してください</u>。
    </p>`,
    choices: ['f','j'],
    prompt: `
    <div style="display: flex; justify-content: space-around; margin-top: 20px;">
        <div style="display: inline-block; padding: 15px 25px; margin-top: 20px; border: 2px solid #007bff; border-radius: 10px; background-color: #e7f3ff; color: #007bff; font-size: 18px;">
            違うの場合は [F] キーを                   
        </div>
        <div style="display: inline-block; padding: 15px 25px; margin-top: 20px; border: 2px solid #007bff; border-radius: 10px; background-color: #e7f3ff; color: #007bff; font-size: 18px;">
            同じの場合は [J] キーを                   
        </div>
    </div>
        `,
    data: {
        phase: 'practice', //mark this part as practice session
        itemID: jsPsych.timelineVariable('ItemID'),
        stimulus_type: jsPsych.timelineVariable('type'),
        correct_ans: jsPsych.timelineVariable('ExpAns')
    }
};

//timeline of practice session
var prac_trial = {
    timeline: [fixation, prac_sound1, prac_sound2, prac_response],
    timeline_variables: prac_timeline_variable,
    randomize_order:true
};


//end of practice
var prac_end = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1 style = "width:100%">
    練習はこれで終わりです。
    </h1>
    <p>
    この時点でご質問等ありましたら、研究員にお尋ねください。

    実験の手順に関してご質問がないようでしたら、下のボタンを押すと、実験が始まります。
    </p>
    `,
    choices: ['準備できました、実験を始めます！'] 
};


//block 2 - main trial
var main_sound1 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable("Sound1"),
    choices: "NO_KEYS", 
    prompt: `
    <h1> 実験：訛りの発音を聞いてください </h1>
    <div>
    <p style="width: 100%"> 
    違う訛りの英語発音であれば<span style="background-color: yellow;">[ F ]キー</span>を、同じ訛りの英語発音であれば <span style="background-color: yellow;">[ J ]キー</span>を<u>押してください</u>。
    </p>
    `,
    trial_ends_after_audio: true
};


var main_sound2 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable("Sound2"),
    choices: "NO_KEYS", 
    prompt: `
    <h1> 実験：訛りの発音を聞いてください </h1>
    <div>
    <p style="width: 100%"> 
    違う訛りの英語発音であれば<span style="background-color: yellow;">[ F ]キー</span>を、同じ訛りの英語発音であれば <span style="background-color: yellow;">[ J ]キー</span>を<u>押してください</u>。
    </p>
    `,
    trial_ends_after_audio: true
};

var main_response = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1> 実験：弁別してください！ </h1>
    <div>
    <p style="width: 100%"> 
    違う訛りの英語発音であれば<span style="background-color: yellow;">[ F ]キー</span>を、同じ訛りの英語発音であれば <span style="background-color: yellow;">[ J ]キー</span>を<u>押してください</u>。
    </p>`,
    choices: ['f','j'],
    prompt: `
    <div style="display: flex; justify-content: space-around; margin-top: 20px;">
        <div style="display: inline-block; padding: 15px 25px; margin-top: 20px; border: 2px solid #007bff; border-radius: 10px; background-color: #e7f3ff; color: #007bff; font-size: 18px;">
            違うの場合は [F] キーを                   
        </div>
        <div style="display: inline-block; padding: 15px 25px; margin-top: 20px; border: 2px solid #007bff; border-radius: 10px; background-color: #e7f3ff; color: #007bff; font-size: 18px;">
            同じの場合は [J] キーを                   
        </div>
    </div>
    `,
    choices: ['f', 'j'],
    data: {
        phase: "main",
        itemID: jsPsych.timelineVariable('ItemID'),
        stimulus_type: jsPsych.timelineVariable('type'),
        correct_ans: jsPsych.timelineVariable('ExpAns'),
    },
};

var main_trial = {
    timeline: [fixation, main_sound1, main_sound2, main_response],
    timeline_variables: main_timeline_variable,
    randomize_order: true,
};

//ending

var ending = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1 style="text-align:left; width:100%;">
    ご協力ありがとうございます。大変お疲れ様です。
    実験はこれで終わります。
    </h1>
    <div>
    <p> 
    お手数をおかけしますが、実験を完了した後、研究者にその旨をお知らせください。

    また、ご質問がございましたら、いつでもご連絡がいただけましたら幸いです。

    下のボタンを押していただいて、実験結果のファイルを保存してください。保存完了後、Webページを閉じていただいても大丈夫です。
    </p>`,
    choices:["結果を保存します。"],
    response_ends_trial: true
};

var exit_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode:false
};

/* finish connection with pavlovia.org */
var pavlovia_finish = {
    type: jsPsychPavlovia,
    command: "finish",
};


var timeline = [pavlovia_init, preload, fullscreen, title, instruction_1, instruction_2, instruction_3, prac_trial, prac_end, main_trial, pavlovia_finish, ending,  exit_fullscreen];

jsPsych.run(timeline);