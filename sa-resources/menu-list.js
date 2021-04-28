// 一个菜单可以包括的所有属性 
// {
// 	id: '12345',		// 菜单id, 必须唯一
// 	name: '用户中心',		// 菜单名称, 同时也是tab选项卡上显示的名称
// 	icon: 'el-icon-user',	// 菜单图标, 参考地址:  https://element.eleme.cn/#/zh-CN/component/icon
//	info: '管理所有用户',	// 菜单介绍, 在菜单预览和分配权限时会有显示 
// 	url: 'sa-html/user/user-list.html',	// 菜单指向地址
// 	parent_id: 1,			// 所属父菜单id, 如果指定了一个值, sa-admin在初始化时会将此菜单转移到指定菜单上 
// 	is_show: true,			// 是否显示, 默认true
// 	is_blank: false,		// 是否属于外部链接, 如果为true, 则点击菜单时从新窗口打开 
// 	childList: [			// 指定这个菜单所有的子菜单, 子菜单可以继续指定子菜单, 至多支持三级菜单
// 		// .... 
// 	],
//	click: function(){}		// 点击菜单执行一个函数 
// }

// 定义菜单列表 
var menuList =	[
	// {
	// 	id: '131231',
	// 	name: '文档说明',
	// 	info: 'sa-admin使用文档',
	// },
	{
		id: '3',
		name: '首页设置',
		icon: 'el-icon-table-lamp',
		info: '首页的一些设置',
		childList: [
			{id: '3-1-1', name: '分类列表', icon: 'el-icon-eleme', url: '../sa-html/sys-type/sys-type-list.html'},
			{id: '3-1-2', name: '分类添加', icon: 'el-icon-plus', url: '../sa-html/sys-type/sys-type-add.html'},
			{id: '3-2-1', name: '轮播图列表', icon: 'el-icon-collection-tag', url: '../sa-html/home/swiper-list.html'},
		]
	},
	{
		id: '4',
		name: '权限控制',
		icon: 'el-icon-unlock',
		info: '对系统角色权限的分配等设计，敏感度较高，请谨慎授权',
		childList: [
			{id: '4-1', name: '角色列表', icon: 'el-icon-key', url: '../sa-html/role/role-list.html'},
			{id: '4-2', name: '菜单列表', icon: 'el-icon-magic-stick', url: '../sa-html/role/menu-list.html'}
		]
	},
	{
		id: '5',
		name: '用户管理',
		icon: 'el-icon-user',
		info: '对用户列表、添加、统计等等...',
		childList: [
			{id: '5-1', name: '用户列表', icon: 'el-icon-document-remove', url: '../sa-html/user/user-list.html'},
			{id: '5-2', name: '用户添加', icon: 'el-icon-plus', url: '../sa-html/user/user-add.html'},
			{
				id: '5-3',
				name: '用户统计',
				icon: 'el-icon-data-line',
				childList: [
					{id: '1-3-1', name: '注册量统计', icon: 'el-icon-pie-chart', url: '../sa-html/user/user-chart.html'},
				]
			}
		]
	},
	{
		id: '6',
		name: '选题管理',
		icon: 'el-icon-document-copy',
		info: '对选题管理的增删改查、维护',
		childList: [
			{
				id: '6-1', name: '标签管理', url: '../sa-html/topic/tag-list.html',
			},
			{
				id: '6-2', name: '选题列表', url: '../sa-html/topic/topic-list.html',
			},
			{
				id: '6-3', name: '选题审核', url: '../sa-html/topic/topic-review.html',
			}	,
			{
				id: '6-4', name: '添加选题', url: '../sa-html/topic/topic-add.html',
			}
		]
	},{
		id: '7',
		name: '文件管理',
		icon: 'el-icon-folder-opened',
		info: '对系统文件的管理',
		childList: [
			{id: '7-1-1', name: '分类列表', icon: 'el-icon-eleme', url: '../sa-html/sys-type/sys-type-list.html'},
			{id: '7-1-2', name: '分类添加', icon: 'el-icon-plus', url: '../sa-html/sys-type/sys-type-add.html'},
			{id: '7-2-1', name: '轮播图列表', icon: 'el-icon-collection-tag', url: '../sa-html/home/swiper-list.html'},
		]
	},{
		id: '8',
		name: '系统管理',
		icon: 'el-icon-cpu',
		info: '对系统的一些监控',
		childList: [
			{id: '8-1-1', name: '接口管理', icon: 'el-icon-tickets', url: 'http://www.qslinjing.com:8083/swagger-ui.html'},
			{id: '8-1-2', name: '数据库监控', icon: 'el-icon-pie-chart', url: 'http://www.qslinjing.com:8083/druid/sql.html'},
		]
	}
]