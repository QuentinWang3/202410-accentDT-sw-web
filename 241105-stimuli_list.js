//20241105
//stimuli list 
//csv to json

//practice stimuli
var prac_timeline_variable = [
    {
      "ItemID": 1,
      "Sound1": "FAS_E5M-BKBR-00-01.wav",
      "Sound2": "FAS_E1M-BKBR-00-01.wav",
      "ExpAns": "j",
      "type": "EE"
    },
    {
      "ItemID": 2,
      "Sound1": "FAS_E1M-BKBR-00-02.wav",
      "Sound2": "FAS_E5M-BKBR-00-02.wav",
      "ExpAns": "j",
      "type": "EE"
    },
    {
      "ItemID": 3,
      "Sound1": "FAS_E1M-BKBR-00-03.wav",
      "Sound2": "FAS_E5M-BKBR-00-03.wav",
      "ExpAns": "j",
      "type": "EE"
    },
    {
      "ItemID": 4,
      "Sound1": "FAS_E1M-BKBR-00-01.wav",
      "Sound2": "FAS_M6M-BKBR-00-01.wav",
      "ExpAns": "f",
      "type": "EM"
    },
    {
      "ItemID": 5,
      "Sound1": "FAS_M6M-BKBR-00-02.wav",
      "Sound2": "FAS_E1M-BKBR-00-02.wav",
      "ExpAns": "f",
      "type": "EM"
    },
    {
      "ItemID": 6,
      "Sound1": "FAS_E1M-BKBR-00-03.wav",
      "Sound2": "FAS_M6M-BKBR-00-03.wav",
      "ExpAns": "f",
      "type": "EM"
    },
    {
      "ItemID": 7,
      "Sound1": "FAS_M1M-BKBR-00-01.wav",
      "Sound2": "FAS_M6M-BKBR-00-01.wav",
      "ExpAns": "j",
      "type": "MM"
    },
    {
      "ItemID": 8,
      "Sound1": "FAS_M6M-BKBR-00-02.wav",
      "Sound2": "FAS_M1M-BKBR-00-02.wav",
      "ExpAns": "j",
      "type": "MM"
    },
    {
      "ItemID": 9,
      "Sound1": "FAS_M6M-BKBR-00-03.wav",
      "Sound2": "FAS_M1M-BKBR-00-03.wav",
      "ExpAns": "j",
      "type": "MM"
    },
    {
      "ItemID": 10,
      "Sound1": "FAS_E5M-BKBR-00-01.wav",
      "Sound2": "FAS_M6M-BKBR-00-01.wav",
      "ExpAns": "f",
      "type": "EM"
    },
    {
      "ItemID": 11,
      "Sound1": "FAS_E5M-BKBR-00-02.wav",
      "Sound2": "FAS_M6M-BKBR-00-02.wav",
      "ExpAns": "f",
      "type": "EM"
    },
    {
      "ItemID": 12,
      "Sound1": "FAS_M6M-BKBR-00-03.wav",
      "Sound2": "FAS_E5M-BKBR-00-03.wav",
      "ExpAns": "f",
      "type": "EM"
    }
   ];

//experiment trial stimuli
var main_timeline_variable = [
  {
    "ItemID": 1,
    "Sound1": "FAS_E5M-BKBR-01-01.wav",
    "Sound2": "FAS_E1M-BKBR-01-01.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 2,
    "Sound1": "FAS_E1M-BKBR-01-02.wav",
    "Sound2": "FAS_E5M-BKBR-01-02.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 3,
    "Sound1": "FAS_E5M-BKBR-01-03.wav",
    "Sound2": "FAS_E1M-BKBR-01-03.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 4,
    "Sound1": "FAS_E5M-BKBR-01-04.wav",
    "Sound2": "FAS_E1M-BKBR-01-04.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 5,
    "Sound1": "FAS_E1M-BKBR-01-05.wav",
    "Sound2": "FAS_E5M-BKBR-01-05.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 6,
    "Sound1": "FAS_E5M-BKBR-01-06.wav",
    "Sound2": "FAS_E1M-BKBR-01-06.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 7,
    "Sound1": "FAS_E5M-BKBR-01-07.wav",
    "Sound2": "FAS_E1M-BKBR-01-07.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 8,
    "Sound1": "FAS_E5M-BKBR-01-08.wav",
    "Sound2": "FAS_E1M-BKBR-01-08.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 9,
    "Sound1": "FAS_E1M-BKBR-01-09.wav",
    "Sound2": "FAS_E5M-BKBR-01-09.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 10,
    "Sound1": "FAS_E1M-BKBR-01-10.wav",
    "Sound2": "FAS_E5M-BKBR-01-10.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 11,
    "Sound1": "FAS_E5M-BKBR-01-11.wav",
    "Sound2": "FAS_E1M-BKBR-01-11.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 12,
    "Sound1": "FAS_E1M-BKBR-01-12.wav",
    "Sound2": "FAS_E5M-BKBR-01-12.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 13,
    "Sound1": "FAS_E5M-BKBR-01-13.wav",
    "Sound2": "FAS_E1M-BKBR-01-13.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 14,
    "Sound1": "FAS_E1M-BKBR-01-14.wav",
    "Sound2": "FAS_E5M-BKBR-01-14.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 15,
    "Sound1": "FAS_E5M-BKBR-01-15.wav",
    "Sound2": "FAS_E1M-BKBR-01-15.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 16,
    "Sound1": "FAS_E5M-BKBR-01-16.wav",
    "Sound2": "FAS_E1M-BKBR-01-16.wav",
    "ExpAns": "j",
    "type": "EE"
  },
  {
    "ItemID": 17,
    "Sound1": "FAS_E1M-BKBR-01-01.wav",
    "Sound2": "FAS_M6M-BKBR-01-01.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 18,
    "Sound1": "FAS_E1M-BKBR-01-02.wav",
    "Sound2": "FAS_M6M-BKBR-01-02.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 19,
    "Sound1": "FAS_E1M-BKBR-01-03.wav",
    "Sound2": "FAS_M6M-BKBR-01-03.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 20,
    "Sound1": "FAS_M6M-BKBR-01-04.wav",
    "Sound2": "FAS_E1M-BKBR-01-04.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 21,
    "Sound1": "FAS_M6M-BKBR-01-05.wav",
    "Sound2": "FAS_E1M-BKBR-01-05.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 22,
    "Sound1": "FAS_E1M-BKBR-01-06.wav",
    "Sound2": "FAS_M6M-BKBR-01-06.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 23,
    "Sound1": "FAS_E1M-BKBR-01-07.wav",
    "Sound2": "FAS_M6M-BKBR-01-07.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 24,
    "Sound1": "FAS_M6M-BKBR-01-08.wav",
    "Sound2": "FAS_E1M-BKBR-01-08.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 25,
    "Sound1": "FAS_M6M-BKBR-01-09.wav",
    "Sound2": "FAS_E1M-BKBR-01-09.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 26,
    "Sound1": "FAS_M6M-BKBR-01-10.wav",
    "Sound2": "FAS_E1M-BKBR-01-10.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 27,
    "Sound1": "FAS_E1M-BKBR-01-11.wav",
    "Sound2": "FAS_M6M-BKBR-01-11.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 28,
    "Sound1": "FAS_E1M-BKBR-01-12.wav",
    "Sound2": "FAS_M6M-BKBR-01-12.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 29,
    "Sound1": "FAS_M6M-BKBR-01-13.wav",
    "Sound2": "FAS_E1M-BKBR-01-13.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 30,
    "Sound1": "FAS_E1M-BKBR-01-14.wav",
    "Sound2": "FAS_M6M-BKBR-01-14.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 31,
    "Sound1": "FAS_E1M-BKBR-01-15.wav",
    "Sound2": "FAS_M6M-BKBR-01-15.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 32,
    "Sound1": "FAS_M6M-BKBR-01-16.wav",
    "Sound2": "FAS_E1M-BKBR-01-16.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 33,
    "Sound1": "FAS_E5M-BKBR-01-01.wav",
    "Sound2": "FAS_M1M-BKBR-01-01.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 34,
    "Sound1": "FAS_E5M-BKBR-01-02.wav",
    "Sound2": "FAS_M1M-BKBR-01-02.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 35,
    "Sound1": "FAS_M1M-BKBR-01-03.wav",
    "Sound2": "FAS_E5M-BKBR-01-03.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 36,
    "Sound1": "FAS_M1M-BKBR-01-04.wav",
    "Sound2": "FAS_E5M-BKBR-01-04.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 37,
    "Sound1": "FAS_E5M-BKBR-01-05.wav",
    "Sound2": "FAS_M1M-BKBR-01-05.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 38,
    "Sound1": "FAS_M1M-BKBR-01-06.wav",
    "Sound2": "FAS_E5M-BKBR-01-06.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 39,
    "Sound1": "FAS_M1M-BKBR-01-07.wav",
    "Sound2": "FAS_E5M-BKBR-01-07.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 40,
    "Sound1": "FAS_M1M-BKBR-01-08.wav",
    "Sound2": "FAS_E5M-BKBR-01-08.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 41,
    "Sound1": "FAS_E5M-BKBR-01-09.wav",
    "Sound2": "FAS_M1M-BKBR-01-09.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 42,
    "Sound1": "FAS_E5M-BKBR-01-10.wav",
    "Sound2": "FAS_M1M-BKBR-01-10.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 43,
    "Sound1": "FAS_E5M-BKBR-01-11.wav",
    "Sound2": "FAS_M1M-BKBR-01-11.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 44,
    "Sound1": "FAS_M1M-BKBR-01-12.wav",
    "Sound2": "FAS_E5M-BKBR-01-12.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 45,
    "Sound1": "FAS_E5M-BKBR-01-13.wav",
    "Sound2": "FAS_M1M-BKBR-01-13.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 46,
    "Sound1": "FAS_M1M-BKBR-01-14.wav",
    "Sound2": "FAS_E5M-BKBR-01-14.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 47,
    "Sound1": "FAS_M1M-BKBR-01-15.wav",
    "Sound2": "FAS_E5M-BKBR-01-15.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 48,
    "Sound1": "FAS_E5M-BKBR-01-16.wav",
    "Sound2": "FAS_M1M-BKBR-01-16.wav",
    "ExpAns": "f",
    "type": "EM"
  },
  {
    "ItemID": 49,
    "Sound1": "FAS_M6M-BKBR-01-01.wav",
    "Sound2": "FAS_M1M-BKBR-01-01.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 50,
    "Sound1": "FAS_M1M-BKBR-01-02.wav",
    "Sound2": "FAS_M6M-BKBR-01-02.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 51,
    "Sound1": "FAS_M6M-BKBR-01-03.wav",
    "Sound2": "FAS_M1M-BKBR-01-03.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 52,
    "Sound1": "FAS_M1M-BKBR-01-04.wav",
    "Sound2": "FAS_M6M-BKBR-01-04.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 53,
    "Sound1": "FAS_M6M-BKBR-01-05.wav",
    "Sound2": "FAS_M1M-BKBR-01-05.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 54,
    "Sound1": "FAS_M6M-BKBR-01-06.wav",
    "Sound2": "FAS_M1M-BKBR-01-06.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 55,
    "Sound1": "FAS_M6M-BKBR-01-07.wav",
    "Sound2": "FAS_M1M-BKBR-01-07.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 56,
    "Sound1": "FAS_M1M-BKBR-01-08.wav",
    "Sound2": "FAS_M6M-BKBR-01-08.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 57,
    "Sound1": "FAS_M1M-BKBR-01-09.wav",
    "Sound2": "FAS_M6M-BKBR-01-09.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 58,
    "Sound1": "FAS_M6M-BKBR-01-10.wav",
    "Sound2": "FAS_M1M-BKBR-01-10.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 59,
    "Sound1": "FAS_M1M-BKBR-01-11.wav",
    "Sound2": "FAS_M6M-BKBR-01-11.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 60,
    "Sound1": "FAS_M6M-BKBR-01-12.wav",
    "Sound2": "FAS_M1M-BKBR-01-12.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 61,
    "Sound1": "FAS_M1M-BKBR-01-13.wav",
    "Sound2": "FAS_M6M-BKBR-01-13.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 62,
    "Sound1": "FAS_M6M-BKBR-01-14.wav",
    "Sound2": "FAS_M1M-BKBR-01-14.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 63,
    "Sound1": "FAS_M6M-BKBR-01-15.wav",
    "Sound2": "FAS_M1M-BKBR-01-15.wav",
    "ExpAns": "j",
    "type": "MM"
  },
  {
    "ItemID": 64,
    "Sound1": "FAS_M1M-BKBR-01-16.wav",
    "Sound2": "FAS_M6M-BKBR-01-16.wav",
    "ExpAns": "j",
    "type": "MM"
  }
 ];