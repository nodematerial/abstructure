var isDragging = false;
var point_a = -1;
var point_b = -1;
var structure_list = [];

var idx = 0;
var char = '';
var chain_number = '';
var chain_from = '';
var chain_to = '';
var pre_x;
var pre_y;
var pre_idx = idx;
var pre_char = char;
var move = 60;
var near = 18;
var far = 50;
var charwrite_flag = 0;
var fontsize = 26
var arrow_mode = 0;
var chain_mode = 0;
var max_arrow_mode = 2; 
var arrow_transparency = 0.5;
var arrow_R = 200
var arrow_G = 200
var arrow_B = 0
var mode = 0;
var direction;
var seq_list = [];
var seq_cluster = [];
var direction_list = [];
var direction_cluster = [];
var chain_list = [];
var nodes = {};
var pre_mode = 0;
var Pressed = [false, false, false, false];
var commandable = true;
const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z',
'A','B','C','D','E','F','G','H','I','J','K','L','M', 
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'1','2','3','4','5','6','7','8','9','10','_'];
var numb = ['1','2','3','4','5','6','7','8','9','0'];

let start = {
    x: 0,
    y: 0
};
// ドラッグ中の位置
let diff = {
    x: 0,
    y: 0
};
// ドラッグ終了後の位置
let end = {
    x: 0,
    y: 0
}