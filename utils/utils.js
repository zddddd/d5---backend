module.exports = {
  getParam: function (data) {
    return {
      "errcode": 0,
      "errmsg": "",
      "data": data
    }
  },
  getJoblist: function (data) {
    return {
      0:{
				"name":"真真小吃",
				"id":1,
				"firstlist":[
					{
						"fname":"热销",
						"hot":"1",
						"sid":1,
						"secondlist":[
							data
						]
					},
					{
						"fname":"点心",
						"sid":2,
						"secondlist":[{
							"result": [
								{
								"sname":"真真小吃手工素包",
								"src":"/static/img/img01.png",
								"nprice":"35",
								"oprice":"40",
								"give":"送排骨汤",
								"storename":"真真小吃外卖",
								"pid":3,
								"full":"50",
								"reduce":"5",
								"deliver":"258",
								"conpic":"/static/img/img01_con.png",
								"like": "flase"
		
							},
							{
								"sname":"真真小吃手工肉包",
								"src":"/static/img/img02.png",
								"nprice":"45",
								"oprice":"60",
								"give":"买一赠一",
								"storename":"真真小吃外卖",
								"pid":4,
								"full":"50",
								"reduce":"5",
								"deliver":"258",
								"conpic":"/static/img/img01_con.png",
								"pid":2,
								"like": "flase"
							}
							]
						}]
					},
					{
						"fname":"主食",
						"sid":3,
						"secondlist":[{
							"result": [
								{
									"sname":"炒饭",
									"src":"/static/img/img03.png",
									"nprice":"45",
									"oprice":"60",
									"storename":"真真小吃外卖",
									"pid":5,
									"full":"50",
									"reduce":"5",
									"deliver":"258",
									"conpic":"/static/img/img01_con.png",
									"like": "flase"
								}
							]
						}
							
						]
					}
					]
		
			},
			1:{
				"name":"D5牛排",
				"id":2,
				"firstlist":[
					{
						"fname":"热销",
						"hot":"1",
						"sid":1,
						"secondlist":[
							{
								"sname":"鲜香薯条",
								"src":"/static/img/img04.png",
								"nprice":"24",
								"oprice":"60",
								"pid":6,
								"storename":"D5牛排",
								"full":"50",
								"reduce":"5",
								"deliver":"258",
								"conpic":"/static/img/img01_con.png",
								"like": "flase"
							}
						]
					},
					{
						"fname":"沙拉",
						"sid":2,
						"secondlist":[
							{
								"sname":"牛油果鸡肉培根沙拉",
								"src":"/static/img/img05.png",
								"nprice":"52",
								"oprice":"67",
								"storename":"D5牛排",
								"pid":7,
								"full":"50",
								"reduce":"5",
								"deliver":"258",
								"conpic":"/static/img/img01_con.png",
								"like": "flase"
							},
							{
								"sname":"真真小吃手工肉包",
								"src":"/static/img/detail06.png",
								"nprice":"45",
								"oprice":"60",
								"give":"买一赠一",
								"storename":"D5牛排",
								"pid":8,
								"full":"50",
								"reduce":"5",
								"deliver":"258",
								"conpic":"/static/img/img01_con.png",
								"like": "flase"
							},
							{
								"sname":"农夫沙拉",
								"src":"/static/img/detail07.png",
								"nprice":"45",
								"oprice":"60",
								"give":"买一赠一",
								"storename":"D5牛排",
								"pid":9,
								"full":"50",
								"reduce":"5",
								"deliver":"258",
								"conpic":"/static/img/img01_con.png",
								"like": "flase"
							}
						]
					},
					{
						"fname":"鸡翅",
						"sid":3,
						"secondlist":[
							{
								"sname":"美式BBQ烤鸡翅",
								"src":"/static/img/detail08.png",
								"nprice":"38",
								"oprice":"60",
								"storename":"D5牛排",
								"pid":10,
								"full":"50",
								"reduce":"5",
								"deliver":"258",
								"conpic":"/static/img/img01_con.png",
								"like": "flase"
							}
						]
					}
					]
		
			},
    	"message": "查询成功!",
      "state": 1
    }
  }
}
