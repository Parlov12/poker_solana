/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/poksol_leaderboard.json`.
 */
export type PoksolLeaderboard = {
  "address": "2rT5faxcrTnWXE125tWzzje9PFHt3k4C3VUjhNfQuzvY",
  "metadata": {
    "name": "poksolLeaderboard",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [],
      "args": []
    },
    {
      "name": "updateScore",
      "discriminator": [
        188,
        226,
        238,
        41,
        14,
        241,
        105,
        215
      ],
      "accounts": [
        {
          "name": "userScore",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  45,
                  115,
                  99,
                  111,
                  114,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "score",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "userScore",
      "discriminator": [
        212,
        150,
        123,
        224,
        34,
        227,
        84,
        39
      ]
    }
  ],
  "types": [
    {
      "name": "userScore",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "score",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
