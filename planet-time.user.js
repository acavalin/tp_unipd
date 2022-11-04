// ==UserScript==
// @name        Planet-Time enhancements (unipd)
// @namespace   camelsoft
// @description Miglioramenti a Planet-Time cartellino presenze
// @include     https://presenze.ict.unipd.it/pta/cartellino.aspx*
// @icon        data:image/png;base64,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
// @downloadURL https://github.com/acavalin/tp_unipd/raw/main/planet-time.user.js
// @version     1.4.0
// @grant       none
// @license     GPLv3
// ==/UserScript==

var icons = {
  // https://www.flaticon.com/free-icon/danger_272238
  warn:  "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHSSURBVDiNpZNNaxNRFIafMzczxkwSUsREpASjFbQSCEXoUi24qIrWhSBd+QNE8Q9o/4CiUEVTF1ZBEQRBVHBRouInotJWXLhRaosYLC1FOm0yM8dFyogkrWIPvItz3/c+3Hu5R1SV1ZS1ovty62PKMvB/gCeFc+GkvSv8bs5QliPL5lS1WY9yWf1Y8v19CZ3vSqle4atex22VbX2CdOpecPOHoSNNrLOO/85px+P0v12hsmk/iXQ3b6eZ7W9nriug/noN+HKKq7L974CMeyO4MIH05Bi+s8jw+yzOngVqI3GbgMGVAU8L53U21kbVwzq8HmPAWIrZViecMuhPq4chOdoaMJLLkW07Hl78ghzLA+DYgmMa/8Q54FF7sBaUs1ySZDMgmb4fvpk3GMEqNXzbBnsJYGUDsJVwymwkxsCfgEr+EOsyO/X2JNaJQsTs63Xo65yOeqfXY/FhAuAkQ7LjN6AtfS24VYW8i2ywow2jH3xGv7lRLwnFdNTxx5wYNB7U4tnmQZx4Rp5XsQ5m0c8LkYopn6LroXNWJLtUo16Jg89uytIvOlb0dEbi4eUJaDFX/kyteVHA2eshSR0XfbGlgpvobk4t1avxT8t6cFdWO86/AKjHwKrFo4yFAAAAAElFTkSuQmCC",
  // https://www.flaticon.com/free-icon/dinner_2648958
  pasto: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKGSURBVDiNpZFLSFRRHMa/+5q5+WB0Zix8jE75SomKCLGEFlam2ANCIkxLUgPbRGFUWi2SShMiiVYiUeKmbRZBEtYiDCoxelhjTqM5Ts7beTRzzz33ttFhBpEWfptzOP/z/c7//x1gjWLOtLW1iILw1eMLHGMYMIOPHp77n6m0dMtpk9lc99tmfcaHgqEyLk1n8fu825fqWjGruFOrN+3jk/V6KDJLwn6X5J4ZiTgsXWazuaKppbn3VFOzfn/lngVeIpJRy3E2AJCpzKUU7n6bWdu+TczI5eIeLYy6ZsvsT7trGcVtra9v1C8XeCKRpED474S4ThQsFovW3HCfJT471HcDWG/QgUgRuP1hMIXVXF7D3R3z/SdzBY0mRuazTTm3Pk98eqLPyEBW2WHxp98B4/xrtN7oAccLAAAqEwzcuQ6XpgrZOw8Y4vNgH/T1vfH6vC90hkx11lTLCFMjaL18M2YGAI4X0HypC9y3YTAMwyQAljcKw2oAwJiWnGCOQTge6amaFec8AMC5mP/r1agmWlMBhdJVv09VVCA9D0frTgRLdMkLUadXYQEgS+ZTq+0KJwfdcPmDoDJZYSbRCDyLYagFlZgcHw8cGZ3fJDs8LBt/SaFEUUoOYqDnGiiVE8z93R2gRTWIumdp0P8nNiMfD3A8v2ctOPs435m9F71XL8KYlgIiReALEShF1RB0G2Abav+Yw4iTABoTQgSAiMvaYRu68IESibLlLfBsPo7A1iZwu1pBFUptg+ffB+amDgFQEjqYcTtmxvjUTFD6JfBjrJyEOq+IhtwqLsVohKqAhrzOyILtZcTx/TYAmbBJ08PROR9R6fQySASwcdX4V4oBULy0rk3/AB/7ClwZFysKAAAAAElFTkSuQmCC",
  // https://www.flaticon.com/free-icon/sun-umbrella_2914050
  ferie1: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAImSURBVDiNY2AgERQEiich8xmJ1VgVKm3AyPz/7cMX3yfJS3Dm/f/NJNi29sklJmINYGT+//b9519hjIyM/z5+/RXOyPrvPQMDAwMzsiIZRR29Tx9evUTXXBgoGv/s3e+C77//y8Q6CgYfvfHt589f/1zs9Xg5kL3ALi4idl+S6e+LH3wCkqaWVnfu3r177NixYw0MDAzfqyOkZD9++Rn5+uNfSwlBtmM8XCwrWlc8e8zEwMDAIMLFICnNzXW/sDBfMEtBSqucm4mb68tHldbW1lJnZ+fTPDw8oty8jJz8POzLGZkY2Xm4WFb8/PmXH261CT/PwUAd9SdPnz79H2Rr83mLqeb/bk35b0mRER/Dw8OfaGhoVMHUZnoLx6D4j5uVQb9cSfproJH+0zNnzvzPzcn9lqso9cNeiP+SGj9vKwMDAz8DHsAizcYZqc/PxXX565dP8+fPf3Xx4qXrN78x8bx+99GUgYHhP8Ho0eLl7HYS4b+tLcg/i4GBQYqBgYFBTEb5kIqKOR9BzVDAw8DAwIIsIKtsECCtoDWdWAOwAjFppRPEqMOZEtnYOE/LqRvF4JKHAXhCYmdnUFGUkUgXFuTS5uflEGJlYeb7z8DEz8LM+P3//3/fv3//9f3zt58v3r7/euvG3VeTGBgYHsEM4NFWlVxrrCtr7GqrLiwpij/sPn7+wXDgxO2Xu4/euHjjzqsIRhEBHgc+PvYcYvyLDj59+jkFAKUqtyvCgv6zAAAAAElFTkSuQmCC",
  ferie2: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEwSURBVDiNldK9K8VhGMbxz0FESl5OXjbJ4m1BXhZmC3+ASSaTkYkJk10Gk4FBlAxGiYFSZLAYFIpSIpIjhuc59Us6zrmWX7+n57ru+/4+N4WrL/lTVICxEVUYiN8GKC4goBjdSKMEN/hI/brUhLs/zL0YxDcu0Y5PnCQDyrAbA5qxjyes4T223YM2XOAMz1kG9TjEHjYwH6vtYAF1cYRTVERzeZLBHK6wiEmsxqqjSAnAjvARW7/GazagE2+owQFa0YFhPGAFx4lRb5NwSjCEdYHwdKxWhak4Rk5lGcziBZuYwSNK/zNnVRk7SaoL4/mYiwQYmV/n5wKbf5VrE9PCbtznCkguUgtGhDf/iuFlwtNlhDEzAqstYZURGCxhArV5dF0X7y6jOoV+jOVh/EvbP2GZOufKRrgrAAAAAElFTkSuQmCC",
  // https://www.flaticon.com/free-icon/work-from-home_3015422
  smart: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAL2SURBVDiNfZJbbNN1FMc/v///9///t871xtpR0su6waTuAl6yrg5nSMCZPSjGiE+STGdi1DeScQ2YmBjAOCNR44PG4AsYL1z6QAhIYLIoDAxuWbxsSjMKc12xbKXr2o3/3weFrCx4nk7O5ZPzPeeo/I91BsLtz/mWf9fkcMcuZlJHAfPeGnmfXtld23DgaU/NM9q8qdUYFeEqwxb9OZvqiicTZxcWqvd2rvME12zw15541Vv/5ICrTKnZuVm/JOYIJdPlLQ7vi5oqWwan0t/emWYhQHaHGz7f6K9/O2TYXQPRiHzlo/1qsDbMqvYnRLE5IvsvDSjduifis9tf0hV9+I9c5k8B8Hz1iuhKt+vgRlcwFHco82u39+j9p78kN9oHlolQdSr8q+nq6eXgnn1Un/qhIFUxdzI1dkQFiFQ6trTbl7b+vq61rGt/r/QF/Hx/aC/PNley0ldBwClZQopTPw7RteMdZpsisu98f0FL3/QoAInczZPvi8zpTbt3Ck3TACiYKsNXsxwdyvHV4CwzBZOpxEUAGh97hPK1bePHJhOfSICfspl4x7LH2xYu0xmO4vbOszXWyPWJDF98fRwhpu/mhRDmL7mpvcr9fsDl8bG+rZnhkSRhvxepKNhDjy6+d7gusklV5MNjibHW997dB4CiqnR0PMVn8QPUeW0MDI1gWxLg5Z7exYDl9U1bYm3rHwKw/gvetuDI4cPkbgmmx0c4P3qDN7fvwbIshBAlAEUISwH469oof6dGmSsWAOgbnCQdep3LhQhy9Rt8fOY2r237gLGryVLA3aUoguJcEdP6993L3WEq3H5ssW1U1ndS6Wtk1hXjw08PlUq441T76hbpy9+4ggWUOf2M/3qWF5xxJub1UsDIb8N6fiaflqparkhps0wT00JMpK5bD4oLonNNI9cmswQjDxBtaOGbc1dKAGLpsuAuTdPtALphOKTUnQC5W9OZQJVe9FW5FM0wdF03dE03tGR6JociszP5/NS5vjNv/QPq8/x1CGujTQAAAABJRU5ErkJggg==",
  // https://www.flaticon.com/free-icon/absent_4753030
  assen: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEFSURBVDiNndK/K4VxFAbwD92bwb11/wImZnUH/8BV+APsFmVUssomKSObUSmb3EG5mRQyWpQbE9vVJUbDexLf9327eOoM5znPec73x6EY42ijHtEOLodKicEDrqIRzoL7E+p4jKiXiYZK+FEc4xIfaGEW/VRYdoURHGI38idUi4RlBsPoYSnyXnA5FF2hgRtc4DW4GqbRxEvJ0C/M4aiAP4ha7gSbCTcRcZLw87iL+GHwhpVBxyrBTkX2uq1/GlQrWMAe1rGM1QFN27Lv3YheDXQxhc4vpnZC20Uj3YMmrgcYTH5PUoNb7GMGa0ltC6dYLDIYw7lsgZ5lO3+fGPSj9h7aGnwCCcgw/a+bL7wAAAAASUVORK5CYII=",
  // https://www.flaticon.com/free-icon/time_3324042
  PPAUM: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAI4SURBVDiNfZLLT1NhEMV/34U+bKFVCK0pBTRRuUDUSF1IVGIMRlmRoMiahSS4EING/ReIj40LDTG69UHcQsJOILIxmpjQ1oVKeZSi3NICyQVu77gQa6DWs5pv5uTMmZNPUQRz9fV9StN8YtuZcDz+tBivtNhAKfUYkRKlVA4oKqAVG/g87uuV/jLKPe6+YhwAlbfc0HAKkZ5ARfkzh1bSB1wEQsACyOiWyJOl5ew1lHoRjkanCgQWdH3B43a5fKFguXm5y7F5+gxprZR9toVzcgL38OutbDK1um5umtWxWHWBlbWTzY9ynR32SiwqhmGIYRgyNPQ8X69EpyXX2WGvRZrvF2QgTU1O7x73lfU795QdCP7zVju4n/Xbd5XX4+qSSMSxM0R/2TmrsbHGOlL/v7ywdB1Lb6jD42zdKaA4Nl9TRyIxlydnMllisS9Eo3FSqSUAEolZ5sO1IHJ8t4AgUrAxEKjCNE1M08z3lNrmb+P3RxI1XT07g682nCf6/T56e3vy76yl+Ow5hNd5gI3g4RmY2t4NSHu7i7WVr6uDD0OWrhc4yVqKG3EfKpcG4Kdd8c3MqRMfLqiMBqBGRjawZcD7YFC01OKOHADepZ1oOYM2xzhtjnGqtOWDLo2rfzMA1OTUK20pddM30J9zvx1GSyYZGx1DSyZxfPpY4OrP+Wp3V1pbjiJyC+E8EARSKX9gsrv/Tete52oI4Idd+V02iby/pIwCgWJoGZUK5aAbQHPycuKsSgP8AlpA3qhtSMmeAAAAAElFTkSuQmCC",
  // https://www.flaticon.com/free-icon/calendar_661512
  ORDI: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFcSURBVDiNldK9SxVgFAbw3ws3EPJricRBavNuDholgSYS4dhmQ0kttrVEQ9DQFoKjRIM4iX9BUEE0iCiIDoLYZlOUdStoaBCOg+deLlfz48Dh4f04zznP874iQkTAFHbr6/8ldjFVXxdcxVOM4QpWnRzXk+QjZip4g0vYQQ8+nUIwkHeHs1Zk9ztYOoOEpbw7hihJ8CpZzxP9eFYn+IZ/5yRow+W6hNHTRj9GymizhFupCV7jLSYwDRHxopRSxRD2sIIKPlSaRlpO/IuFxGVcLKUsYhI1dOMPHmOkmeBH4r7Dd96PiPdZfA33svAX7mIRNxseYC6zD78Tq3k+2foLsYZ3J5qI+/iJC00EX3P/EWoNCaWUl8eYuJeae/EFz9GBTTzI84aE25mdeJLYlcbNtEzWkfuzBdtYx7yjsYXxNGzd4d+v4iG+Y1B23c5JWnMju91Iw2r4jFm0R4QDvVnj4qYTtJAAAAAASUVORK5CYII=",
  // https://www.flaticon.com/free-icon/add_992651
  ECCE:  "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAD5SURBVDiNrdMxTkJBEAbgbwnnoHwHUBMaboAXwITEwgOQeAC9ADewoKI2UW5AQ6IXoKK2sKQdC+aZh/AwBieZ7O788/87uztbIkLTSikVbnCZDu/p84hY7xEiQooUTLDFClOM0qcZ22ZO+eY1yAt8YlyDPx3jzFnUIjUwSaDXRm6I9DJ3Uh+/ytIOdsYQw5ZKtsn1iFXLbjPMWrAVHjp500t/tyWuuikwr6OllGvc5fIiY8+5foqI15y/YdQ9ovyBTc6rHDcNbM8KXrCOiPsDsJQZRMTtEWyKqmPXYYMjlfxmA7tjnHzGPvonn/HsRvqXVj7nM5Vzv/MXUAYjnPJ0Bd4AAAAASUVORK5CYII=",
  // https://www.flaticon.com/free-icon/minus_992683
  DEB: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADjSURBVDiNrdOxTQNRDAbg70WZI+UtABJNFkBigSClY4CTWIAFbgPqLABhgjSRYIFU1CkorzVFfHBEnMTpsPRLT7b//9nv2SUi9K2UUuEWFwl4S2wi4vCDEBFSpKBGiz0arBJN+trMKV+8HnmLD6y74DmwzpxtJ9IF6gwshsg9kUXm1l37VZY2ePNAJS2qggdcR8SVEVZK2eNlli+9G0NO2+FyngKbnvIN7gZIjxHxnOdXrOa/JB3xPiBwPHcUPOEQEfd/Kvy70gbVzGnClmPIaUunNqZ94/RB+pdRnrJMZeo6fwIEkQxurB5IhAAAAABJRU5ErkJggg==",
  // https://www.flaticon.com/free-icon/lifespan_8160673
  tb_moi:   "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAcNJREFUSIm11TtoFkEUBeDP3wQior9iRJCA+EAtxCaIpSCCWIoRTCdaiAhWPpMmYCGorQixUgtfoBapJKAWNkogKEIKLbTQBNSEFAkqGIuZwO9mZ3YRc5plzp07Z87M3TssMpYk+F24jO8lsQaW4gh+/KvwNWzOxC9gd52FGgm+DbOZvFm01xEoHtFWnMJejGImkbcDX/EaV2WOqijwCOfwrc7ucEhwciM1oa0w/oX3eKj8glsxhqc4nJtUFJjHHE5k8lbhFQ5gXeQG8bmuQA7dGMBJwW0THcIxXRdcVQqsjgsV0Y4+3MFzrIncG9wWXI/hU5XAEPaV8PtxJe7yN3ZiU3TyGO9wGmeqBCYF20V04EOB68YevMBPbGgNpgSO41IJPxVFGtHBCDZiZYwvFwqkUmACwyX8dqzF2ziexM2W+Ay+JNYE9+P3QSK+Ak/QY2GbOYh72NJKphw0MyJNHMNHjKNT6E29uCtceKVATyZGKOOjQhWtx0tctLAAkouM4FlGgHCx/UKrGEhNSgmMyrcK0kf4F1LvwX9DysE2nK/InauIlwrMv1K9WFaRewtdwt9bW2BIKLXpOrsTWvXZmnMXB38AHZJQ+0VcKSkAAAAASUVORK5CYII=",
  // https://www.flaticon.com/free-icon/holidays_3634857
  tb_ferie: "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHlSURBVEiJtdVPiM1RFAfwz7x5M1OaYaGJ0UwIMSZjwQZbC0oRCmFhirJUNnYWU1YUNv4spCmymFAWlAVN/r9BkiQWJJSQiVIWM4t7n3f79Xtp5v3mW7+633PO+553zz3nXmroQAVP0F4AB00oYQPWYG60fY7+RvgD3CzjHH5jTLHYiC0wGg0deIxHaltuhMNoE15hb8H/voqhMjpxYJoSdBJOfrpQKRUk1I0FeY5yAeLHsDhqvcPhySRYiX3oi/wtLmEk8m4siva/WIH5eF8VqFeiNpzEdbRiNg7hAvbjSowZT3Ra43o8FcrbQRPOowcncAq9uJisx7Acz4SypCX68L8E2/FN6K7vwuHtFK6BrViPn0n8EaFUzZLSpMi26W3MwW48Fyb9aUwwWeS2aS+uYjOGsQ5fMXMKCUKWDB/GwoxtE05PRTvvDLZleA9mYJdQ5z/4iE+4gy/RX8KvrFi9OWjGHgzEH43gcoy/hnkx8VCMLQkDdyt3Gxneh7s4KvR/Fe3C/T4Lq5LvIF4KD0x/nvZ9YQJhtXCfL62zs7boP5t8NzCIJXiItTG2H/eodc1r4anrqiNOeFYHMrZmnInrLmHQ3kTNZWngoND7jWIHjuc5KmgpIEELXlRJ2kU/hIMqAv+ukgmqWHAOmIzIrAAAAABJRU5ErkJggg==",
  // https://www.flaticon.com/free-icon/iftar_2918130
  tb_pasto: "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH3SURBVEiJ7dRNiI5RFAfw3zumeGlGk48ZJvkMoVkYaQwp5CNDaiQTSUlJIYWFspFSsrGiFIqVlI0pJbGZzVj4iEKUSDOb8VEYM8qMxb1P83i98zzY8t/cc87zv+d/7nnOvfxHDgpxrUN9DrcHr3M483EGfTiFjkTgDu7lbF6PhpRfhQnR/opuTENFLHYvtlVGQi+OYjBDYEHKHocbeBz9LpzGHqErAzgOicB7LMfnkqSPMCNWW5GKJ0k+RL+I5ljkT0gEutEaK0kwiJdowlT0p771CC0bn8pzCbezBJ6UI+ByFKhNxXZhJ75FfyAK/IJEoAuTyhEiJsciEqzBWmFaMpE+QXMGbwo+oSb6R4S+F3Py96YFhjvBTBzDMyzLSViKOVkCS7Ea61AtTNqrPxSoTwS+YEy0Rwq3cTouCvM9Go3YiDYcwtuc5LV4U0gF2rEpJu3EWYzFSRzA98hbhJt4gI8ZAg3Ynw60o0V4QxbjYIxXxXUHtkS7FScyki/BNRiB2ViJFdiMu8J09WEuZgmP2FM8xIYoug/vIqfaUMuaovh29BdwH1czqknwHC+iQClasFtoZRGHxWekElewCgvRkSHQWCY2T7gfncKg1MTKy+K8MB01wxFSGCX8j1uGpm8iLpQSCyX2VuG4db8hUg7ncP0v9/6r+AGE1mD1QkGvjQAAAABJRU5ErkJggg==",
};

// mappa giustificativo-icona
var giust_icons = {
  FERIE:   'ferie1',
  RICOM:   'ferie2',
  FLEXEP:  'ferie1',
  TELAV:   'smart',
  AGIL:    'smart',
}

function icon_tag (icon_key, ttip) { return '<img src="data:image/png;base64,'+icons[icon_key]+'" title="'+(ttip||'')+'">'; }//icon_tag

function setup_cartellino () {
  // riquadro credits + links
  if ($('#acavalin').length == 0) {
    var links_hp     = '<a style="text-decoration: underline !important;" href="https://acavalin.com/" target="_blank">A.Cavalin</a>',
        links_script = '<a style="text-decoration: underline !important;" href="https://github.com/acavalin/tp_unipd" target="_blank">PT script</a>',
        links_css    = 'position: fixed; top: 0.5rem; left: 22%; padding: 0.3rem 0.6rem; z-index: 65000;'+
          'background: linear-gradient(to bottom, rgb(249, 249, 249) 0%, rgb(241, 241, 241) 100%);'+
          'border-radius: 0.5rem; border: 1px outset red;';
    $('<div id="acavalin" style="'+links_css+'">'+links_script+' by '+links_hp+'</div>').appendTo('body');
  }//if
  
  // mostra per default contenuto del tab totalizzatori
  if ($('#pageFooter_C2').is(':hidden')) {
    $('#pageFooter_CC > div').hide();
    $('#pageFooter_C2').show();
  }//if
  
  // mostra totali in alto
  var moi = $("#lblTotalizzatori tr td:first-child:contains('MO02')").parent().children().last().text();
  var pasti = $("#lblTotali td:contains('Buoni pasto maturati')").parent().children().last().prev().text();
  var ferie = [];
  $.each(['FE03', 'FE02', 'FE01'], function () {
    ferie.push( $("#lblTotalizzatori tr td:first-child:contains('"+this+"')").parent().children().last().text().replace(',00', '') );
  });
  $('#tb > ul .dxm-alignSpacing').
    css('vertical-align', 'middle').
    css('font-family', 'monospace').
    html(
      '<div style="background-color: #ddd; display: inline-block; border: 1px inset black; padding: 0.1rem; padding-right: 1rem; border-radius: 0.5rem">'+
      icon_tag('tb_moi'  , 'MOI anno corrente')+' '+moi+' '+
      icon_tag('tb_ferie', 'FERIE corrente + precedente + scad.30-06')+' '+ferie.join('+')+
      icon_tag('tb_pasto', 'Buoni pasto maturati')+' '+pasti+
      '</div>'
    ).find('img').css('vertical-align', 'text-bottom').css('margin-left', '1rem');
  
  // imposta un'altezza fissa al cartellino centrale
  $('div.dxgvCSD').css('overflow', 'auto').css('height', '50vh');

  // mostra icona del buono pasto
  $('#gvCartellino_DXMainTable tbody tr.cart_cell div.pasto').
    replaceWith(icon_tag('pasto', 'buono pasto maturato'));

  // compatta giorno + monospace
  $('#gvCartellino_DXMainTable tbody tr.cart_cell td:nth-child(2)').
    css('font-family', 'monospace').
    each(function (i) { $(this).text( $(this).text().trim().replace(' ', '').substr(0,3) ); });
  
  // mostra icone per l'assenza (ferie/recupero/TL/agile)
  $('#gvCartellino_DXMainTable tbody tr.cart_cell td.dxgvPHEC').each(function (i) {
    var el = $(this),
        giustificativi = [el.prev().text().trim(), el.text().trim()],
        gg = el.parent().find('td:nth-child(2)');
    
    //if (giustificativi[1].length > 0)
    //  // mostra errore se c'é piú di un giustificativo
    //  gg.append(icon_tag('warn', giustificativi.join(', ')));
    //else {
    //  // mostra icona del giustificativo se presente
    //  var giust_key = giustificativi[0].slice(4);
    //  if (giust_key) {
    //    var icon_name = giust_icons[giust_key] || 'assen';
    //    gg.append(icon_tag(icon_name, giustificativi[0]));
    //  }//if
    //}//if-else
    // mostra errore se c'é piú di un giustificativo
    gg.append(giustificativi[1].length > 0 ? '!' : ' ');
    // mostra icone dei giustificativi se presenti
    $.each(giustificativi, function () {
      // mostra icona del giustificativo se presente
      var giust_key = this.slice(4);
      if (giust_key) {
        var icon_name = giust_icons[giust_key] || 'assen';
        gg.append(icon_tag(icon_name, giustificativi[0]));
      }//if
    });
  });

  // metti icone al posto dei codici
  $.each(['ECCE', 'PPAUM', 'ORDI', 'DEB'], function (i, key) {
    $('#gvCartellino_DXMainTable tbody tr.cart_cell td:contains('+key+')').each(function () {
      $(this).
        text( $(this).text().replace(key, '') ).
        prepend(icon_tag(key, key));
    });
  });
  $.each(['TELAV', 'AGIL', 'FERIE', 'RICOM'], function (i, key) {
    $('#gvCartellino_DXMainTable tbody tr.cart_cell td:contains('+key+')').each(function () {
      $(this).
        text( $(this).text().replace(' - ', '').replace(key, '') ).
        prepend(icon_tag(giust_icons[key], key));
    });
  });
}//setup_cartellino

(function ($) { $(function () {
  setup_cartellino();
  
  var sel = '#tb div:lt(2)';      // mese prec/succ
  sel += ', #tb div#tb_DXI9_T';   // compact view
  sel += ', #tb div#tb_DXI7_T';   // aggiorna
  sel += ', #pcAssegna_HCB-1';    // chiusura dialog dettaglio gg
  sel += ', #mnuMasterImage_ITCNT1_deData_1_DDD_C_mt td'; // cambio data
  $('body').on('click', sel, function () {
    setTimeout(setup_cartellino, 1500);
  });
});})(jQuery);
