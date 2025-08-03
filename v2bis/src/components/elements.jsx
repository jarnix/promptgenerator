import { v4 as uuid } from 'uuid';

const generalBlocks = [
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "hostnameShort", "desc": "hostname (short)", "html": "mycomputer", "code": "\\h" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "hostnameFull", "desc": "hostname (full)", "html": "mycomputer.example", "code": "\\H" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "username", "desc": "username", "html": "username", "code": "\\u" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "shellName", "desc": "shell name", "html": "bash", "code": "\\v" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "terminal", "desc": "terminal", "html": "ttys02", "code": "\\l" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "currentDirectory", "desc": "directory", "html": "/usr/local/src", "code": "\\w" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "currentDirectoryBase", "desc": "directory (basename)", "html": "src", "code": "\\W" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "timeShort", "desc": "time-short (HH:MM)", "html": "14:23", "code": "\\A" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "timeLong", "desc": "time with seconds (HH:MM:SS)", "html": "14:23:52", "code": "\\t" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "timeAMPM", "desc": "time (HH:MM)", "html": "07:23 AM", "code": "\\@" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "timeDate", "desc": "date (Day Month Date)", "html": "Mon Feb 22", "code": "\\d" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "exitStatus", "desc": "exit status", "html": "0", "code": "\\$?" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charCaret", "desc": "^", "html": "^", "code": "^" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charStar", "desc": "*", "html": "*", "code": "*" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charDash", "desc": "-", "html": "-", "code": "-" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charUnderscore", "desc": "_", "html": "_", "code": "_" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charSpace", "desc": "space", "html": " ", "code": " " },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charNewLine", "desc": "new line", "html": "<br>", "code": "\\n" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charDollar", "desc": "#/$", "html": "$", "code": "\\\\$" },

];

const gitBlocks = [
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "gitBranch", "desc": "git branch", "html": "(main)", "code": "($(git branch 2>/dev/null | grep '^*' | colrm 1 2))" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "gitTag", "desc": "git tag", "html": "v1.0.0", "code": "($(git describe --tags 2>/dev/null))" },
];

const ponctuationCharacters = [
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charGreaterThan", "desc": ">", "html": ">", "code": ">" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charAt", "desc": "@", "html": "@", "code": "@" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charColon", "desc": ":", "html": ":", "code": ":" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charComma", "desc": ",", "html": ",", "code": "," },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charPeriod", "desc": ".", "html": ".", "code": "." },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charQuestion", "desc": "?", "html": "?", "code": "?" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charExclamation", "desc": "!", "html": "!", "code": "!" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charBackslash", "desc": "\\", "html": "\\", "code": "\\\\" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charLeftBrace", "desc": "{", "html": "{", "code": "{" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charRightBrace", "desc": "}", "html": "}", "code": "}" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charLeftBracket", "desc": "[", "html": "[", "code": "[" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charRightBracket", "desc": "]", "html": "]", "code": "]" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charLeftParenthesis", "desc": "(", "html": "(", "code": "(" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "charRightParenthesis", "desc": ")", "html": ")", "code": ")" },
];

const boxDrawingCharacters = [
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightHorizontal", "desc": "─ (light horizontal)", "html": "─", "code": "─" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightVertical", "desc": "│ (light vertical)", "html": "│", "code": "│" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightDownAndRight", "desc": "┌ (light down and right)", "html": "┌", "code": "┌" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightDownAndLeft", "desc": "┐ (light down and left)", "html": "┐", "code": "┐" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightUpAndRight", "desc": "└ (light up and right)", "html": "└", "code": "└" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightUpAndLeft", "desc": "┘ (light up and left)", "html": "┘", "code": "┘" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightVerticalAndRight", "desc": "├ (light vertical and right)", "html": "├", "code": "├" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightVerticalAndLeft", "desc": "┤ (light vertical and left)", "html": "┤", "code": "┤" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightDownAndHorizontal", "desc": "┬ (light down and horizontal)", "html": "┬", "code": "┬" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightUpAndHorizontal", "desc": "┴ (light up and horizontal)", "html": "┴", "code": "┴" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightVerticalAndHorizontal", "desc": "┼ (light vertical and horizontal)", "html": "┼", "code": "┼" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleHorizontal", "desc": "═ (double horizontal)", "html": "═", "code": "═" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleVertical", "desc": "║ (double vertical)", "html": "║", "code": "║" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleDownAndRight", "desc": "╔ (double down and right)", "html": "╔", "code": "╔" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleDownAndLeft", "desc": "╗ (double down and left)", "html": "╗", "code": "╗" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleUpAndRight", "desc": "╚ (double up and right)", "html": "╚", "code": "╚" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleUpAndLeft", "desc": "╝ (double up and left)", "html": "╝", "code": "╝" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleVerticalAndRight", "desc": "╠ (double vertical and right)", "html": "╠", "code": "╠" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleVerticalAndLeft", "desc": "╣ (double vertical and left)", "html": "╣", "code": "╣" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleDownAndHorizontal", "desc": "╦ (double down and horizontal)", "html": "╦", "code": "╦" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleUpAndHorizontal", "desc": "╩ (double up and horizontal)", "html": "╩", "code": "╩" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleVerticalAndHorizontal", "desc": "╬ (double vertical and horizontal)", "html": "╬", "code": "╬" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightDoubleDownAndRight", "desc": "╒ (light double down and right)", "html": "╒", "code": "╒" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightDoubleDownAndLeft", "desc": "╕ (light double down and left)", "html": "╕", "code": "╕" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightDoubleUpAndRight", "desc": "╘ (light double up and right)", "html": "╘", "code": "╘" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightDoubleUpAndLeft", "desc": "╛ (light double up and left)", "html": "╛", "code": "╛" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightDoubleVerticalAndRight", "desc": "╞ (light double vertical and right)", "html": "╞", "code": "╞" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightDoubleVerticalAndLeft", "desc": "╡ (light double vertical and left)", "html": "╡", "code": "╡" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightDoubleDownAndHorizontal", "desc": "╤ (light double down and horizontal)", "html": "╤", "code": "╤" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightDoubleUpAndHorizontal", "desc": "╧ (light double up and horizontal)", "html": "╧", "code": "╧" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightDoubleVerticalAndHorizontal", "desc": "╪ (light double vertical and horizontal)", "html": "╪", "code": "╪" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleLightDownAndRight", "desc": "╓ (double light down and right)", "html": "╓", "code": "╓" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleLightDownAndLeft", "desc": "╖ (double light down and left)", "html": "╖", "code": "╖" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleLightUpAndRight", "desc": "╙ (double light up and right)", "html": "╙", "code": "╙" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleLightUpAndLeft", "desc": "╜ (double light up and left)", "html": "╜", "code": "╜" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleLightVerticalAndRight", "desc": "╟ (double light vertical and right)", "html": "╟", "code": "╟" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleLightVerticalAndLeft", "desc": "╢ (double light vertical and left)", "html": "╢", "code": "╢" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleLightDownAndHorizontal", "desc": "╥ (double light down and horizontal)", "html": "╥", "code": "╥" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleLightUpAndHorizontal", "desc": "╨ (double light up and horizontal)", "html": "╨", "code": "╨" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxDoubleLightVerticalAndHorizontal", "desc": "╫ (double light vertical and horizontal)", "html": "╫", "code": "╫" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxHeavyHorizontal", "desc": "━ (heavy horizontal)", "html": "━", "code": "━" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxHeavyVertical", "desc": "┃ (heavy vertical)", "html": "┃", "code": "┃" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxHeavyDownAndRight", "desc": "┏ (heavy down and right)", "html": "┏", "code": "┏" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxHeavyDownAndLeft", "desc": "┓ (heavy down and left)", "html": "┓", "code": "┓" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxHeavyUpAndRight", "desc": "┗ (heavy up and right)", "html": "┗", "code": "┗" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxHeavyUpAndLeft", "desc": "┛ (heavy up and left)", "html": "┛", "code": "┛" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxHeavyVerticalAndRight", "desc": "┣ (heavy vertical and right)", "html": "┣", "code": "┣" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxHeavyVerticalAndLeft", "desc": "┫ (heavy vertical and left)", "html": "┫", "code": "┫" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxHeavyDownAndHorizontal", "desc": "┳ (heavy down and horizontal)", "html": "┳", "code": "┳" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxHeavyUpAndHorizontal", "desc": "┻ (heavy up and horizontal)", "html": "┻", "code": "┻" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxHeavyVerticalAndHorizontal", "desc": "╋ (heavy vertical and horizontal)", "html": "╋", "code": "╋" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightArcDownAndRight", "desc": "╭ (light arc down and right)", "html": "╭", "code": "╭" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightArcDownAndLeft", "desc": "╮ (light arc down and left)", "html": "╮", "code": "╮" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightArcUpAndRight", "desc": "╰ (light arc up and right)", "html": "╰", "code": "╰" },
    { "id": uuid(), type: "standard", style: { "fgColor": 0, "bgColor": 0, "bold": false }, "text": "boxLightArcUpAndLeft", "desc": "╯ (light arc up and left)", "html": "╯", "code": "╯" },
];

const emoji = [
    { "id": uuid(), type: "emoji", style: {}, "text": "emoji", "desc": "emoji", "html": "emoji", "code": "emoji" },
];

const blockElements = [
    // Block Elements Unicode U+2580–U+259F
    { "id": uuid(), type: "block", style: {}, text: "upperHalfBlock", desc: "▀ (upper half block)", html: "▀", code: "▀" }, // U+2580
    { "id": uuid(), type: "block", style: {}, text: "lowerOneEighthBlock", desc: "▁ (lower one eighth block)", html: "▁", code: "▁" }, // U+2581
    { "id": uuid(), type: "block", style: {}, text: "lowerOneQuarterBlock", desc: "▂ (lower one quarter block)", html: "▂", code: "▂" }, // U+2582
    { "id": uuid(), type: "block", style: {}, text: "lowerThreeEighthsBlock", desc: "▃ (lower three eighths block)", html: "▃", code: "▃" }, // U+2583
    { "id": uuid(), type: "block", style: {}, text: "lowerHalfBlock", desc: "▄ (lower half block)", html: "▄", code: "▄" }, // U+2584
    { "id": uuid(), type: "block", style: {}, text: "lowerFiveEighthsBlock", desc: "▅ (lower five eighths block)", html: "▅", code: "▅" }, // U+2585
    { "id": uuid(), type: "block", style: {}, text: "lowerThreeQuartersBlock", desc: "▆ (lower three quarters block)", html: "▆", code: "▆" }, // U+2586
    { "id": uuid(), type: "block", style: {}, text: "lowerSevenEighthsBlock", desc: "▇ (lower seven eighths block)", html: "▇", code: "▇" }, // U+2587
    { "id": uuid(), type: "block", style: {}, text: "fullBlock", desc: "█ (full block)", html: "█", code: "█" }, // U+2588
    { "id": uuid(), type: "block", style: {}, text: "leftSevenEighthsBlock", desc: "▉ (left seven eighths block)", html: "▉", code: "▉" }, // U+2589
    { "id": uuid(), type: "block", style: {}, text: "leftThreeQuartersBlock", desc: "▊ (left three quarters block)", html: "▊", code: "▊" }, // U+258A
    { "id": uuid(), type: "block", style: {}, text: "leftFiveEighthsBlock", desc: "▋ (left five eighths block)", html: "▋", code: "▋" }, // U+258B
    { "id": uuid(), type: "block", style: {}, text: "leftHalfBlock", desc: "▌ (left half block)", html: "▌", code: "▌" }, // U+258C
    { "id": uuid(), type: "block", style: {}, text: "leftThreeEighthsBlock", desc: "▍ (left three eighths block)", html: "▍", code: "▍" }, // U+258D
    { "id": uuid(), type: "block", style: {}, text: "leftOneQuarterBlock", desc: "▎ (left one quarter block)", html: "▎", code: "▎" }, // U+258E
    { "id": uuid(), type: "block", style: {}, text: "leftOneEighthBlock", desc: "▏ (left one eighth block)", html: "▏", code: "▏" }, // U+258F
    { "id": uuid(), type: "block", style: {}, text: "rightHalfBlock", desc: "▐ (right half block)", html: "▐", code: "▐" }, // U+2590
    { "id": uuid(), type: "block", style: {}, text: "lightShade", desc: "░ (light shade)", html: "░", code: "░" }, // U+2591
    { "id": uuid(), type: "block", style: {}, text: "mediumShade", desc: "▒ (medium shade)", html: "▒", code: "▒" }, // U+2592
    { "id": uuid(), type: "block", style: {}, text: "darkShade", desc: "▓ (dark shade)", html: "▓", code: "▓" }, // U+2593
    { "id": uuid(), type: "block", style: {}, text: "upperOneEighthBlock", desc: "▔ (upper one eighth block)", html: "▔", code: "▔" }, // U+2594
    { "id": uuid(), type: "block", style: {}, text: "rightOneEighthBlock", desc: "▕ (right one eighth block)", html: "▕", code: "▕" }, // U+2595
    // U+2596–U+259F: Quadrant blocks and others
    { "id": uuid(), type: "block", style: {}, text: "quadrantLowerLeft", desc: "▖ (quadrant lower left)", html: "▖", code: "▖" }, // U+2596
    { "id": uuid(), type: "block", style: {}, text: "quadrantLowerRight", desc: "▗ (quadrant lower right)", html: "▗", code: "▗" }, // U+2597
    { "id": uuid(), type: "block", style: {}, text: "quadrantUpperLeft", desc: "▘ (quadrant upper left)", html: "▘", code: "▘" }, // U+2598
    { "id": uuid(), type: "block", style: {}, text: "quadrantUpperLeftLowerLeft", desc: "▙ (quadrant upper left and lower left and lower right)", html: "▙", code: "▙" }, // U+2599
    { "id": uuid(), type: "block", style: {}, text: "quadrantUpperLeftLowerRight", desc: "▚ (quadrant upper left and lower right)", html: "▚", code: "▚" }, // U+259A
    { "id": uuid(), type: "block", style: {}, text: "quadrantUpperLeftUpperRightLowerLeft", desc: "▛ (quadrant upper left and upper right and lower left)", html: "▛", code: "▛" }, // U+259B
    { "id": uuid(), type: "block", style: {}, text: "quadrantUpperLeftUpperRightLowerRight", desc: "▜ (quadrant upper left and upper right and lower right)", html: "▜", code: "▜" }, // U+259C
    { "id": uuid(), type: "block", style: {}, text: "quadrantUpperRightLowerLeftLowerRight", desc: "▝ (quadrant upper right and lower left and lower right)", html: "▝", code: "▝" }, // U+259D
    { "id": uuid(), type: "block", style: {}, text: "quadrantUpperRightLowerRight", desc: "▞ (quadrant upper right and lower right)", html: "▞", code: "▞" }, // U+259E
    { "id": uuid(), type: "block", style: {}, text: "quadrantUpperLeftUpperRightLowerRight", desc: "▟ (quadrant upper left and upper right and lower right)", html: "▟", code: "▟" }, // U+259F
];


// Combined ITEMS array for backward compatibility
const ITEMS = [
    ...generalBlocks,
    ...gitBlocks,
    ...ponctuationCharacters,
    ...boxDrawingCharacters,
    ...emoji,
    ...blockElements
];

const COLORS = [[[0, '#000000'], [1, '#bb0000'], [2, '#00bb00'], [3, '#bbbb00'], [4, '#3e3eff'], [5, '#bb00bb'], [6, '#00bbbb'], [7, '#bbbbbb']], [[8, '#555555'], [9, '#ff5555'], [10, '#55ff55'], [11, '#ffff55'], [12, '#5555ff'], [13, '#ff55ff'], [14, '#55ffff'], [15, '#ffffff']],
[[16, '#000000'], [22, '#005f00'], [28, '#008700'], [34, '#00af00'], [40, '#00d700'], [46, '#00ff00'], [82, '#5fff00'], [76, '#5fd700'], [70, '#5faf00'], [64, '#5f8700'], [58, '#5f5f00'], [52, '#5f0000']], [[17, '#00005f'], [23, '#005f5f'], [29, '#00875f'], [35, '#00af5f'], [41, '#00d75f'], [47, '#00ff5f'], [83, '#5fff5f'], [77, '#5fd75f'], [71, '#5faf5f'], [65, '#5f875f'], [59, '#5f5f5f'], [53, '#5f005f']],
[[18, '#000087'], [24, '#005f87'], [30, '#008787'], [36, '#00af87'], [42, '#00d787'], [48, '#00ff87'], [84, '#5fff87'], [78, '#5fd787'], [72, '#5faf87'], [66, '#5f8787'], [60, '#5f5f87'], [54, '#5f0087']], [[19, '#0000af'], [25, '#005faf'], [31, '#0087af'], [37, '#00afaf'], [43, '#00d7af'], [49, '#00ffaf'], [85, '#5fffaf'], [79, '#5fd7af'], [73, '#5fafaf'], [67, '#5f87af'], [61, '#5f5faf'], [55, '#5f00af']],
[[20, '#0000d7'], [26, '#005fd7'], [32, '#0087d7'], [38, '#00afd7'], [44, '#00d7d7'], [50, '#00ffd7'], [86, '#5fffd7'], [80, '#5fd7d7'], [74, '#5fafd7'], [68, '#5f87d7'], [62, '#5f5fd7'], [56, '#5f00d7']], [[21, '#0000ff'], [27, '#005fff'], [33, '#0087ff'], [39, '#00afff'], [45, '#00d7ff'], [51, '#00ffff'], [87, '#5fffff'], [81, '#5fd7ff'], [75, '#5fafff'], [69, '#5f87ff'], [63, '#5f5fff'], [57, '#5f00ff']],
[[93, '#8700ff'], [99, '#875fff'], [105, '#8787ff'], [111, '#87afff'], [117, '#87d7ff'], [123, '#87ffff'], [159, '#afffff'], [153, '#afd7ff'], [147, '#afafff'], [141, '#af87ff'], [135, '#af5fff'], [129, '#af00ff']], [[92, '#8700d7'], [98, '#875fd7'], [104, '#8787d7'], [110, '#87afd7'], [116, '#87d7d7'], [122, '#87ffd7'], [158, '#afffd7'], [152, '#afd7d7'], [146, '#afafd7'], [140, '#af87d7'], [134, '#af5fd7'], [128, '#af00d7']],
[[91, '#8700af'], [97, '#875faf'], [103, '#8787af'], [109, '#87afaf'], [115, '#87d7af'], [121, '#87ffaf'], [157, '#afffaf'], [151, '#afd7af'], [145, '#afafaf'], [139, '#af87af'], [133, '#af5faf'], [127, '#af00af']], [[90, '#870087'], [96, '#875f87'], [102, '#878787'], [108, '#87af87'], [114, '#87d787'], [120, '#87ff87'], [156, '#afff87'], [150, '#afd787'], [144, '#afaf87'], [138, '#af8787'], [132, '#af5f87'], [126, '#af0087']],
[[89, '#87005f'], [95, '#875f5f'], [101, '#87875f'], [107, '#87af5f'], [113, '#87d75f'], [119, '#87ff5f'], [155, '#afff5f'], [149, '#afd75f'], [143, '#afaf5f'], [137, '#af875f'], [131, '#af5f5f'], [125, '#af005f']], [[88, '#870000'], [94, '#875f00'], [100, '#878700'], [106, '#87af00'], [112, '#87d700'], [118, '#87ff00'], [154, '#afff00'], [148, '#afd700'], [142, '#afaf00'], [136, '#af8700'], [130, '#af5f00'], [124, '#af0000']],
[[160, '#d70000'], [166, '#d75f00'], [172, '#d78700'], [178, '#d7af00'], [184, '#d7d700'], [190, '#d7ff00'], [226, '#ffff00'], [220, '#ffd700'], [214, '#ffaf00'], [208, '#ff8700'], [202, '#ff5f00'], [196, '#ff0000']], [[161, '#d7005f'], [167, '#d75f5f'], [173, '#d7875f'], [179, '#d7af5f'], [185, '#d7d75f'], [191, '#d7ff5f'], [227, '#ffff5f'], [221, '#ffd75f'], [215, '#ffaf5f'], [209, '#ff875f'], [203, '#ff5f5f'], [197, '#ff005f']],
[[162, '#d70087'], [168, '#d75f87'], [174, '#d78787'], [180, '#d7af87'], [186, '#d7d787'], [192, '#d7ff87'], [228, '#ffff87'], [222, '#ffd787'], [216, '#ffaf87'], [210, '#ff8787'], [204, '#ff5f87'], [198, '#ff0087']], [[163, '#d700af'], [169, '#d75faf'], [175, '#d787af'], [181, '#d7afaf'], [187, '#d7d7af'], [193, '#d7ffaf'], [229, '#ffffaf'], [223, '#ffd7af'], [217, '#ffafaf'], [211, '#ff87af'], [205, '#ff5faf'], [199, '#ff00af']],
[[164, '#d700d7'], [170, '#d75fd7'], [176, '#d787d7'], [182, '#d7afd7'], [188, '#d7d7d7'], [194, '#d7ffd7'], [230, '#ffffd7'], [224, '#ffd7d7'], [218, '#ffafd7'], [212, '#ff87d7'], [206, '#ff5fd7'], [200, '#ff00d7']], [[165, '#d700ff'], [171, '#d75fff'], [177, '#d787ff'], [183, '#d7afff'], [189, '#d7d7ff'], [195, '#d7ffff'], [231, '#ffffff'], [225, '#ffd7ff'], [219, '#ffafff'], [213, '#ff87ff'], [207, '#ff5fff'], [201, '#ff00ff']],
[[232, '#080808'], [233, '#121212'], [234, '#1c1c1c'], [235, '#262626'], [236, '#303030'], [237, '#3a3a3a'], [238, '#444444'], [239, '#4e4e4e'], [240, '#585858'], [241, '#626262'], [242, '#6c6c6c'], [243, '#767676']], [[255, '#eeeeee'], [254, '#e4e4e4'], [253, '#dadada'], [252, '#d0d0d0'], [251, '#c6c6c6'], [250, '#bcbcbc'], [249, '#b2b2b2'], [248, '#a8a8a8'], [247, '#9e9e9e'], [246, '#949494'], [245, '#8a8a8a'], [244, '#808080']]];

// Export individual groups and combined arrays
export {
    generalBlocks,
    gitBlocks,
    ponctuationCharacters,
    boxDrawingCharacters,
    emoji,
    blockElements,
    COLORS
};
