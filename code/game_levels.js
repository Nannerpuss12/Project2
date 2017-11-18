var GAME_LEVELS = [
  ["                                                                                 ",
   "                                       yyy                                       ",
   "                                    yyyyyyy                                      ",
   "                                      yyyyy                                      ",
   "          yyy                                                      p             ",
   "        yyyyyy                                      o       o                    ",
   "            yyyy                              o                   xxx            ",
   "                                                   xx      xx    xx!xx           ",
   "                                             xx                  x!!!xx          ",
   "                                                                 xx!xx           ",
   "                                                                  xvx            ",
   "                                                                                 ",
   "  x                                       o o                             xx   x ",
   "  x                     o                                                  x   x ",
   "  x                                      xxxxx                           o x   x ",
   "  x       o  xxxx       o                xxxxx                             x   x ",
   "  x          x  x                        xxxxx                   xxxxxx    x   x ",
   "  x     xxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx!!!!!xxxxxxx    xxxxxx   x ",
   "  x  @  x                     x   x                  x!!!!!x                   x ",
   "  xxxxxxx                     x!!!x                  x!!!!!x o      |          x ",
   "                              x!!!x                  x!!!!!x                   x ",
   "                              xxxxx                  xxxxxxx                   x ",
   "                                                            xxxxxxx!!xxxxxxxxxxx ",
   "                                                                  xxxx           "],
  ["                                    x x!!x                                               ",
   "                            x       x x!!x                     				             ",
   " o                                  x x!!xxxxxxxxxx           				             ",
   "                                    xxxx!!!!!!!!!!xxxxxxxxxxxxxxxxxxx                    ",
   " xx                         |       x  xxxxxxxxxx!!x                 x                   ",
   "              o         o           x           xx!x                 x                   ",
   "                                    x           xx!x                 x                   ",
   "      xx     xxx=      xxxx         x          x xxx                 x                   ",
   "               x      =x   xxxxxx   x          x                     x                   ",
   "               x!!!!!!!x   x  xx!   x          x              		 x                   ",
   "                xxxvxxx    x  xx!   x          x                   o x                   ",
   " xx                       x   xx!   x          x     x               x                   ",
   "   x                      x   xx!   x          x     x             xxx                   ",
   "     xxx                 x    xx!   x          x     x            x  x                   ",
   "        x               x     xx!   x          x     x           x   x                   ",
   "         xx        o   x      xx!   x          xx    x               x                   ",
   "                      x       xx!   x          x     x       o       x                   ",
   "               xxxxxxx        xxx   xxx        x=      x             x                   ",
   "              xx     xx         x   x          x     x     xxxxxx    x                   ",
   "             xx       xx        x   x          x    xx         !     x                   ",
   "     @       x         x        x   x          x     x         !     x                   ",
   "    xxx      x         x        x   x          x=      x       !     x                   ",
   "    x x  xx  x         x       xx   xx         x     x         x=    x                   ",
   "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x                   ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxxxx     ",
   "!!!!x x!!!!!!x         x!!!!!x             o        xx!!!!!!xx !                    xx   ",
   "!!!!x x!!!!!!x         x!!!!!x           o   o     xx!!!!!!xx  !                     x   ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !    o   o   o      o !x  ",
   "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !      |   |   |      x   ",
   "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !!!xxxxxxxxxxxxxxxxxxx    "],
  ["                                                                                                   ",
   "                                                                                                   ",
   "                                                                   xx                              ",
   "                                                                  xvvx                             ",
   "                                                                                                   ",
   "                                                                                                   ",
   "                                                                                                   ",
   "                                                                                                   ",
   "                                                                                                   ",
   "                                                     xxx                                           ",
   "                        o                           x                     o                        ",
   "  xxx                        x     x               x       =       xx                              ",
   "  x x                   x    x  o  x         x     x         o     xx   xxxx                     x ",
   "  x                    xxx    x   x         x x     x              xx   x  x     o               x ",
   "  x                   x   x    x x          x        xxx    xxx    xx   xxxx                     x ",
   "  x                   xxxxx     x     x      xo            x   x   xx   x      xxxxx    o        x ",
   "  x         x         x   x  o       xxx      x            xxxxx        x        x               x ",
   "  x         |     x                 x   x   x x   o        x  x                  x     xxx       x ",
   "  x               x          x    o xxxxx    x             x   x                 x               x ",
   "  x              ox           x     x   x         x                   xxxx       x         xxx   x ",
   "  x               x!!!!!!!!!!!xxxxxxxxxxxxx  x    x    x            xxx  xx                     xx ",
   "  x      @     xxx!!!!!!!!!!!!x           x!!x!!!!x!!!!x!xxxxxxxxx!!!!x   xx                    x  ",
   "  xxxxxxxxxxxx!!!!!xxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                   ",
   "                                                                                                   "],
  ["                                                                                                              ",
   "                                                                     x        x                               ",
   "                      x                                             xvx      xvx                              ",
   "                      x                                             x xxxxxxxx x                              ",
   "                    o x                                            xx          xxxxxxxxxxxxxxxxxxxxxxxxxxx    ",
   "                    o x                                   xxxxxxxxx                 xvxx                 x    ",
   "                    o x                                   x                           xvxx               x    ",
   "                   xxxx        x                          x                             xvxx             x    ",
   "          !     !  xxxxxxxxxxxxvx                         x                               xvx            x    ",
   "          x    xx                                         x                                              x    ",
   "          x=    x                                         x               o                         o o  x    ",
   "          xx    xxxxxxxxxxx                               x      xx   =   x  =   xx                 o o  x    ",
   "                         x!                               x   o   x!!!!!!!!!!!!!!!x                      x    ",
   "             o            x!                              x       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    ",
   "            xxx            x!                             x      ox                                           ",
   "           xvvvx            x!                            xx      x                                           ",
   "           x   x            x! o                          x      x                                            ",
   "                             x!                           x  o                                                ",
   "             o               xxxxx                        x                                                   ",
   "                   xxx        x                           x  !                                                ",
   "                              x                            x x                  x      x                      ",
   "                              x                           x      xx                                           ",
   "           x   x         xxx  x  o   xxx                                 x                  x                 ",
   "          xvxxxvx             x       |                                                                       ",
   "  o                           x                                  ||                                           ",
   "  x                           x                                                                               ",
   "  x             xxxxxxxxx   xxxxxxxxx   xx                                                x                   ",
   "  x     x       x      |x   x|     |x o x                 |                   x     x                         ",
   "  x  @  x       x   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxxxxxx xxxxx                           xxxxx       x      xx     xxx                                   ",
   "        xxx= o =xxx                           x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "],
  ["                                                          ",
   "                                                          ",
   "  x     x   xxx              x           x                ",
   "   x   x   xx!xx  x   x      x           x  x   x    x    ",
   "    x x    x!!!x  x   x      x     x     x  x  x x   x    ",
   "     x     xx!xx  x   x       x   x x   x   x  x  x  x    ",
   "     x      xxx   xxxxx        x x   x x    x  x   x x    ",
   "     x                          x     x     x  x    x     ",
   "                                                          ",
   "                                                          ",
   "                                                          ",
   "  @                                                       ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                          "]   
  ];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
