An app to algorithmically generate tracker module music files.

# Dev

```
make watch
```

# Build

```
make
cd build && node server.js
```

# About the MOD format

* [Protracker Module](https://wiki.multimedia.cx/index.php/Protracker_Module).
* [MOD effect reference](https://wiki.openmpt.org/Manual:_Effect_Reference#MOD_Effect_Commands).

# Mod JSON format

```json
{
  "title": "",
  "channelCount": 8,
  "sequence": [
    1,
    2,
    3,
    4,
    5
  ],
  "samples": [
    {
      "name": "000000156.wav",
      "pcm": [0, 0, ..., 0],
      "wave": "...instead of pcm: Base64 encoded wave data...",
      "length": 5502,
      "volume": 1,
      "loopStart": 0,
      "loopLength": 2,
      "finetune": 7
    },
    ...
    {
      "name": "",
      "finetune": 7
    },
  ],
  "tables": [ // pattern
    [ // column
      [ // row
        { // note and effect
          "semitone": 53, // E-6
          "sample": 12,
          "fx": 3843, // 0xF03
        },
        {
          "semitone": -1,
          "sample": null,
          "fx": 2303, // 0x8FF
        },
        {
          "semitone": -1,
          "sample": null,
          "fx": null,
        },
        {
          "semitone": 43, // F#5
          "sample": 17,
          "fx": 2048, // 0x800
        },
      ]
    ]
  ],
  "version": 1,
  "format": "mod"
}
```
