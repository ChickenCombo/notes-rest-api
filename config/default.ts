export default {
  port: 5000,
  dbUri: "mongodb://127.0.0.1:27017/notes-rest-api",
  saltWorkFactor: 10,
  accessTokenTimeToLive: "15m",
  refreshTokenTimeToLive: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjIIbXy5oUpML28tyQXiT
LQrwezfC1R5C5MPFQnzfajhvlbi23HnxgVehOV90UJ/P8Mcl9su17viXOsWLvuAy
sZ3CbmzwF3TmHpFPL5p4umOKG2t1sJO/rUAKHqrp9Ybjc7EsDjuOXSvoD/ptyVeW
aHkO6Us9ibBjYWN24yTErRgGrZTiuVjENAEnnUj1ll6jlATR7sQU7E58/VxkXFyD
52PrBEZ3H176qzYeVbRotpBWhXlZ4ZhqJMvGrTdN6OCsMPrp6MHu7bi+8/yNzSZ1
v/hz4UOujZAGyhnMVPePT8UCqgHvDgFXI1Zl2bKDerkXMrUyhWYVHpBDuHjcVK38
lQIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAjIIbXy5oUpML28tyQXiTLQrwezfC1R5C5MPFQnzfajhvlbi2
3HnxgVehOV90UJ/P8Mcl9su17viXOsWLvuAysZ3CbmzwF3TmHpFPL5p4umOKG2t1
sJO/rUAKHqrp9Ybjc7EsDjuOXSvoD/ptyVeWaHkO6Us9ibBjYWN24yTErRgGrZTi
uVjENAEnnUj1ll6jlATR7sQU7E58/VxkXFyD52PrBEZ3H176qzYeVbRotpBWhXlZ
4ZhqJMvGrTdN6OCsMPrp6MHu7bi+8/yNzSZ1v/hz4UOujZAGyhnMVPePT8UCqgHv
DgFXI1Zl2bKDerkXMrUyhWYVHpBDuHjcVK38lQIDAQABAoIBAGp6LkPy5xusU1A8
3FjBBscbgyHdH8hhJlA2C0ZXWvcjzWuojuqFfn6F6aeQrpRqhynvwNVFipmNyQzA
pyX+wGvZIX6ND2S3Mav4cgmhBdw5km80//rP/HFOFl0nKCToE3WYzcn7V+dDXpi9
LnVl6pVBKAui+P9eq/Ehbvay5lhEtXu7DB+c8UAtU/b82prUpJQFhkMcqKaEzlyx
Jx/fxAEeF3e1GOXHnmD/ED0WVXYybfr575Mgyrx/ZCwkwkPbnZQB+RqF8rOEEyMI
P7jMPkHMH+7Gx+Ru7mmIj/X2lnaoghytyrcXm8zGIJdZgmPQYblFLGMFA1BGxXGN
uq1cgAECgYEA7352FB2ENWYI/SgqJCVALGyJwjYHPXIyWiqvXHAeNAkxxE/RQXot
9/DUFtYcXKYw8vDmnwzEpPx8FrB+DzyOrbicQo0o1Mpn3Lr6Oll8z4BErlwSBe22
9ivvlbSuyLd/piV4JhX2bB88xYMguTw1NlPsTLlQEzcx3Wf/5Vu7F6UCgYEAljEt
8RxHRmg0Gm9s6btuoik+OZLzDJLyoFdMBYaZgiw0qeQ6Zv3EH4y0lGJdOtg/3L+V
esOWldTLj27SaFxUym5PaTC3YmtH8TJFHaxX4Y7S8BpwDqtxDNzkTwvMAruTQRwL
O0DF30g2wNiUS+hQt0DkvqmFpRfPxbGxeqBqvjECgYBZ/Ol/O2v+6Hz+KoZTGJAZ
YRsOF2D3DJ6w1JMZp6MhqEbD3b3h3XfCTwJSJld31JZV4oC1SIXm/Fvf5qcnMHjn
+5LzSrkJ45fND5CQNim4ihjEbyHyilSSAQY/+SknkBNtqWyQ2vXBwKcEC/ZSw7W2
2SfT2FmnLrkU2UwEsUgGZQKBgH463Tr9ImZpZAknxyj2r/g4o6St/fp+cs8SL8Gh
K9m9H5H+UJuJAtHlZ0wjE+pGH/5/QrnIMwLAs0lcwhiWKWltpu5o1GgydGeicXaM
B9x6No04GyApNT2zVWueJZvSXOPnFwV43hVYUzRnktPtcBFkyBv6zGlCBw1H2DuR
IcWxAoGAQPGYguYuNOY+BMQh+RvW8RCAClLai7eAuxG7tO4/4iKoWlyBlbJZzf5a
LDBY0dTUne3429MbcC3Pys0uRUbPF9ermIZp6FZUwwXjyL1W4wZNFFyNdyF0RPyO
QlrM9FVoRdXgfVCL33HitY6R9bhL4kA21bJsUndKqPuz9sukekQ=
-----END RSA PRIVATE KEY-----`,
};
