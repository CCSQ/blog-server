/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50637
 Source Host           : 127.0.0.1:3306
 Source Schema         : blogdev

 Target Server Type    : MySQL
 Target Server Version : 50637
 File Encoding         : 65001

 Date: 27/11/2017 13:45:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_elm_food_type
-- ----------------------------
DROP TABLE IF EXISTS `t_elm_food_type`;
CREATE TABLE `t_elm_food_type` (
  `t_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `id` int(11) DEFAULT NULL COMMENT '菜单id',
  `count` int(11) DEFAULT NULL COMMENT '分类下数量',
  `ids` varchar(255) DEFAULT NULL COMMENT '子菜单列表',
  `level` int(11) DEFAULT NULL COMMENT '未知',
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COMMENT='饿了么分类表';

-- ----------------------------
-- Records of t_elm_food_type
-- ----------------------------
BEGIN;
INSERT INTO `t_elm_food_type` VALUES (1, 0, 586, '[-100, 207, 220, 260, 233, -102, 244, 252, 275, 276, -103, -104, -105, -107, -106]', 1, '全部商家');
INSERT INTO `t_elm_food_type` VALUES (2, -100, 582, '[-100, 1, 7, 2, 8, 3, 4, 5, 6]', 1, '美食');
INSERT INTO `t_elm_food_type` VALUES (3, 1, 231, '', 1, '简餐便当');
INSERT INTO `t_elm_food_type` VALUES (4, 7, 130, '', 1, '小吃炸串');
INSERT INTO `t_elm_food_type` VALUES (5, 2, 92, '', 1, '面食粥点');
INSERT INTO `t_elm_food_type` VALUES (6, 8, 80, '', 1, '地方菜系');
INSERT INTO `t_elm_food_type` VALUES (7, 3, 27, '', 1, '汉堡披萨');
INSERT INTO `t_elm_food_type` VALUES (8, 4, 9, '', 1, '香锅冒菜');
INSERT INTO `t_elm_food_type` VALUES (9, 5, 9, '', 1, '日韩料理');
INSERT INTO `t_elm_food_type` VALUES (10, 6, 4, '', 1, '轻食西餐');
INSERT INTO `t_elm_food_type` VALUES (11, 207, 290, '[207]', 1, '快餐便当');
INSERT INTO `t_elm_food_type` VALUES (12, 265, 114, '', 2, '简餐');
INSERT INTO `t_elm_food_type` VALUES (13, 209, 98, '', 2, '盖浇饭');
INSERT INTO `t_elm_food_type` VALUES (14, 213, 59, '', 2, '米粉面馆');
INSERT INTO `t_elm_food_type` VALUES (15, 212, 19, '', 2, '汉堡');
INSERT INTO `t_elm_food_type` VALUES (16, 217, 18, '', 2, '饺子馄饨');
INSERT INTO `t_elm_food_type` VALUES (17, 215, 14, '', 2, '包子粥店');
INSERT INTO `t_elm_food_type` VALUES (18, 266, 10, '', 2, '烧腊饭');
INSERT INTO `t_elm_food_type` VALUES (19, 269, 7, '', 2, '煲仔饭');
INSERT INTO `t_elm_food_type` VALUES (20, 214, 6, '', 2, '麻辣烫');
INSERT INTO `t_elm_food_type` VALUES (21, 219, 3, '', 2, '香锅砂锅');
INSERT INTO `t_elm_food_type` VALUES (22, 267, 2, '', 2, '黄焖鸡米饭');
INSERT INTO `t_elm_food_type` VALUES (23, 216, 1, '', 2, '生煎锅贴');
INSERT INTO `t_elm_food_type` VALUES (24, 220, 69, '[220]', 1, '特色菜系');
INSERT INTO `t_elm_food_type` VALUES (25, 221, 32, '', 2, '川湘菜');
INSERT INTO `t_elm_food_type` VALUES (26, 263, 24, '', 2, '其他菜系');
INSERT INTO `t_elm_food_type` VALUES (27, 231, 9, '', 2, '火锅烤鱼');
INSERT INTO `t_elm_food_type` VALUES (28, 232, 9, '', 2, '海鲜');
INSERT INTO `t_elm_food_type` VALUES (29, 225, 2, '', 2, '江浙菜');
INSERT INTO `t_elm_food_type` VALUES (30, 222, 1, '', 2, '粤菜');
INSERT INTO `t_elm_food_type` VALUES (31, 223, 1, '', 2, '东北菜');
INSERT INTO `t_elm_food_type` VALUES (32, 226, 1, '', 2, '西北菜');
INSERT INTO `t_elm_food_type` VALUES (33, 227, 1, '', 2, '鲁菜');
INSERT INTO `t_elm_food_type` VALUES (34, 260, 20, '[260]', 1, '异国料理');
INSERT INTO `t_elm_food_type` VALUES (35, 229, 9, '', 2, '日韩料理');
INSERT INTO `t_elm_food_type` VALUES (36, 211, 8, '', 2, '披萨意面');
INSERT INTO `t_elm_food_type` VALUES (37, 230, 4, '', 2, '西餐');
INSERT INTO `t_elm_food_type` VALUES (38, 233, 130, '[233]', 1, '小吃夜宵');
INSERT INTO `t_elm_food_type` VALUES (39, 237, 74, '', 2, '地方小吃');
INSERT INTO `t_elm_food_type` VALUES (40, 234, 27, '', 2, '炸鸡炸串');
INSERT INTO `t_elm_food_type` VALUES (41, 218, 15, '', 2, '烧烤');
INSERT INTO `t_elm_food_type` VALUES (42, 236, 15, '', 2, '小龙虾');
INSERT INTO `t_elm_food_type` VALUES (43, 235, 12, '', 2, '鸭脖卤味');
INSERT INTO `t_elm_food_type` VALUES (44, 238, 2, '', 2, '零食');
INSERT INTO `t_elm_food_type` VALUES (45, -102, 146, '[-102, 11, 12, 9, 10]', 1, '甜品饮品');
INSERT INTO `t_elm_food_type` VALUES (46, 11, 60, '', 1, '奶茶果汁');
INSERT INTO `t_elm_food_type` VALUES (47, 12, 42, '', 1, '面包蛋糕');
INSERT INTO `t_elm_food_type` VALUES (48, 9, 36, '', 1, '甜品');
INSERT INTO `t_elm_food_type` VALUES (49, 10, 8, '', 1, '咖啡');
INSERT INTO `t_elm_food_type` VALUES (50, 244, 19, '[244]', 1, '果蔬生鲜');
INSERT INTO `t_elm_food_type` VALUES (51, 245, 15, '', 2, '水果');
INSERT INTO `t_elm_food_type` VALUES (52, 247, 4, '', 2, '生鲜');
INSERT INTO `t_elm_food_type` VALUES (53, 246, 1, '', 2, '蔬菜');
INSERT INTO `t_elm_food_type` VALUES (54, 270, 1, '', 2, '海鲜水产');
INSERT INTO `t_elm_food_type` VALUES (55, 252, 32, '[252]', 1, '商店超市');
INSERT INTO `t_elm_food_type` VALUES (56, 254, 26, '', 2, '超市');
INSERT INTO `t_elm_food_type` VALUES (57, 271, 8, '', 2, '便利店');
INSERT INTO `t_elm_food_type` VALUES (58, 274, 1, '', 2, '名酒坊');
INSERT INTO `t_elm_food_type` VALUES (59, 275, 54, '[275]', 1, '浪漫鲜花');
INSERT INTO `t_elm_food_type` VALUES (60, 251, 54, '', 2, '浪漫鲜花');
INSERT INTO `t_elm_food_type` VALUES (61, 276, 1, '[276]', 1, '医药健康');
INSERT INTO `t_elm_food_type` VALUES (62, 277, 1, '', 2, '医药健康');
INSERT INTO `t_elm_food_type` VALUES (63, -103, 177, '[-103, -9, -5, -4, -8, -6, -11, -7]', 1, '早餐');
INSERT INTO `t_elm_food_type` VALUES (64, -9, 60, '', 1, '奶茶果汁');
INSERT INTO `t_elm_food_type` VALUES (65, -5, 59, '', 1, '米粉面馆');
INSERT INTO `t_elm_food_type` VALUES (66, -4, 19, '', 1, '汉堡');
INSERT INTO `t_elm_food_type` VALUES (67, -8, 18, '', 1, '饺子馄饨');
INSERT INTO `t_elm_food_type` VALUES (68, -6, 14, '', 1, '包子粥店');
INSERT INTO `t_elm_food_type` VALUES (69, -11, 6, '', 1, '面包');
INSERT INTO `t_elm_food_type` VALUES (70, -7, 1, '', 1, '生煎锅贴');
INSERT INTO `t_elm_food_type` VALUES (71, -104, 336, '[-104, -15, -12, -41, -42, -13, -14]', 1, '午餐');
INSERT INTO `t_elm_food_type` VALUES (72, -15, 114, '', 1, '简餐');
INSERT INTO `t_elm_food_type` VALUES (73, -12, 98, '', 1, '盖浇饭');
INSERT INTO `t_elm_food_type` VALUES (74, -41, 59, '', 1, '米粉面馆');
INSERT INTO `t_elm_food_type` VALUES (75, -42, 32, '', 1, '川湘菜');
INSERT INTO `t_elm_food_type` VALUES (76, -13, 19, '', 1, '汉堡');
INSERT INTO `t_elm_food_type` VALUES (77, -14, 14, '', 1, '包子粥店');
INSERT INTO `t_elm_food_type` VALUES (78, -105, 274, '[-105, -21, -16, -20, -17, -19, -22, -18]', 1, '下午茶');
INSERT INTO `t_elm_food_type` VALUES (79, -21, 101, '', 1, '炸鸡小吃');
INSERT INTO `t_elm_food_type` VALUES (80, -16, 60, '', 1, '奶茶果汁');
INSERT INTO `t_elm_food_type` VALUES (81, -20, 42, '', 1, '面包蛋糕');
INSERT INTO `t_elm_food_type` VALUES (82, -17, 36, '', 1, '甜品');
INSERT INTO `t_elm_food_type` VALUES (83, -19, 15, '', 1, '水果');
INSERT INTO `t_elm_food_type` VALUES (84, -22, 12, '', 1, '鸭脖卤味');
INSERT INTO `t_elm_food_type` VALUES (85, -18, 8, '', 1, '咖啡');
INSERT INTO `t_elm_food_type` VALUES (86, -107, 497, '[-107, -31, -32, -35, -37, -33, -34, -38, -39, -40, -36]', 1, '晚餐');
INSERT INTO `t_elm_food_type` VALUES (87, -31, 114, '', 1, '简餐');
INSERT INTO `t_elm_food_type` VALUES (88, -32, 98, '', 1, '盖浇饭');
INSERT INTO `t_elm_food_type` VALUES (89, -35, 74, '', 1, '地方小吃');
INSERT INTO `t_elm_food_type` VALUES (90, -37, 60, '', 1, '奶茶果汁');
INSERT INTO `t_elm_food_type` VALUES (91, -33, 59, '', 1, '米粉面馆');
INSERT INTO `t_elm_food_type` VALUES (92, -34, 32, '', 1, '川湘菜');
INSERT INTO `t_elm_food_type` VALUES (93, -38, 27, '', 1, '炸鸡炸串');
INSERT INTO `t_elm_food_type` VALUES (94, -39, 19, '', 1, '汉堡');
INSERT INTO `t_elm_food_type` VALUES (95, -40, 8, '', 1, '披萨意面');
INSERT INTO `t_elm_food_type` VALUES (96, -36, 6, '', 1, '麻辣烫');
INSERT INTO `t_elm_food_type` VALUES (97, -106, 215, '[-106, -29, -24, -27, -23, -28, -26, -25]', 1, '夜宵');
INSERT INTO `t_elm_food_type` VALUES (98, -29, 74, '', 1, '地方小吃');
INSERT INTO `t_elm_food_type` VALUES (99, -24, 59, '', 1, '米粉面馆');
INSERT INTO `t_elm_food_type` VALUES (100, -27, 27, '', 1, '炸鸡炸串');
INSERT INTO `t_elm_food_type` VALUES (101, -23, 19, '', 1, '汉堡');
INSERT INTO `t_elm_food_type` VALUES (102, -28, 15, '', 1, '小龙虾');
INSERT INTO `t_elm_food_type` VALUES (103, -26, 15, '', 1, '烧烤');
INSERT INTO `t_elm_food_type` VALUES (104, -25, 6, '', 1, '麻辣烫');
COMMIT;

-- ----------------------------
-- Table structure for t_relation_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `t_relation_role_menu`;
CREATE TABLE `t_relation_role_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  `menu_id` int(11) NOT NULL COMMENT '菜单ID',
  `insert_time` timestamp NULL DEFAULT NULL COMMENT '插入时间',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `t_foreign_key_mrole_id` (`role_id`),
  KEY `t_foreign_key_menu_id` (`menu_id`),
  CONSTRAINT `t_foreign_key_menu_id` FOREIGN KEY (`menu_id`) REFERENCES `t_sys_menu` (`id`),
  CONSTRAINT `t_foreign_key_mrole_id` FOREIGN KEY (`role_id`) REFERENCES `t_sys_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='角色-用户-关系表';

-- ----------------------------
-- Table structure for t_relation_user_role
-- ----------------------------
DROP TABLE IF EXISTS `t_relation_user_role`;
CREATE TABLE `t_relation_user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  `insert_time` timestamp NULL DEFAULT NULL COMMENT '插入时间',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `t_foreign_key_user_id` (`user_id`),
  KEY `t_foreign_key_role_id` (`role_id`),
  CONSTRAINT `t_foreign_key_role_id` FOREIGN KEY (`role_id`) REFERENCES `t_sys_role` (`id`),
  CONSTRAINT `t_foreign_key_user_id` FOREIGN KEY (`user_id`) REFERENCES `t_sys_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='角色-用户-关系表';

-- ----------------------------
-- Records of t_relation_user_role
-- ----------------------------
BEGIN;
INSERT INTO `t_relation_user_role` VALUES (1, 1, 1, '2017-11-14 14:35:41', '2017-11-14 14:35:43');
COMMIT;

-- ----------------------------
-- Table structure for t_sys_dic
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_dic`;
CREATE TABLE `t_sys_dic` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(50) DEFAULT NULL COMMENT '字典名称',
  `dic` varchar(50) DEFAULT NULL COMMENT '字典代码',
  `type` int(11) DEFAULT NULL COMMENT '类型 - DIC（系统／用户／不可用）',
  `insert_time` timestamp NULL DEFAULT NULL COMMENT '插入时间',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='字典表';

-- ----------------------------
-- Records of t_sys_dic
-- ----------------------------
BEGIN;
INSERT INTO `t_sys_dic` VALUES (1, '字典类型', 'dicType', 1, '2017-11-17 02:08:15', '2017-11-17 02:08:33');
COMMIT;

-- ----------------------------
-- Table structure for t_sys_dic_entity
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_dic_entity`;
CREATE TABLE `t_sys_dic_entity` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `dic_id` int(11) DEFAULT NULL COMMENT '字典ID',
  `name` varchar(50) DEFAULT NULL COMMENT '实体名',
  `code` varchar(50) DEFAULT NULL COMMENT '实体代码',
  `value` int(11) DEFAULT NULL COMMENT '实体值',
  `insert_time` timestamp NULL DEFAULT NULL COMMENT '插入时间',
  `uptate_time` timestamp NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `t_foreign_key_dic_id` (`dic_id`),
  CONSTRAINT `t_foreign_key_dic_id` FOREIGN KEY (`dic_id`) REFERENCES `t_sys_dic` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10003 DEFAULT CHARSET=utf8 COMMENT='字典实体表';

-- ----------------------------
-- Records of t_sys_dic_entity
-- ----------------------------
BEGIN;
INSERT INTO `t_sys_dic_entity` VALUES (10000, 1, '不可用', 'unUser', 0, '2017-11-17 02:12:15', '2017-11-17 02:12:17');
INSERT INTO `t_sys_dic_entity` VALUES (10001, 1, '系统', 'system', 1, '2017-11-17 02:09:14', '2017-11-17 02:09:18');
INSERT INTO `t_sys_dic_entity` VALUES (10002, 1, '用户', 'user', 2, '2017-11-17 02:11:35', '2017-11-17 02:11:37');
COMMIT;

-- ----------------------------
-- Table structure for t_sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_menu`;
CREATE TABLE `t_sys_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `icon` varchar(50) DEFAULT NULL COMMENT '图标',
  `name` varchar(100) DEFAULT NULL COMMENT '菜单名',
  `url` varchar(100) DEFAULT NULL COMMENT 'url路径',
  `component` varchar(100) DEFAULT NULL COMMENT '跳转组件地址',
  `type` int(11) DEFAULT NULL COMMENT '菜单类型 - DIC（路由／公共／权限）',
  `status` int(4) DEFAULT NULL COMMENT '状态（开启／关闭）',
  `father_id` int(11) DEFAULT '0' COMMENT '父节点ID',
  `order_number` int(11) DEFAULT '0' COMMENT '排序号',
  `insert_time` timestamp NULL DEFAULT NULL COMMENT '插入时间',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='菜单表';

-- ----------------------------
-- Table structure for t_sys_role
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_role`;
CREATE TABLE `t_sys_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(100) DEFAULT NULL COMMENT '角色名',
  `insert_time` timestamp NULL DEFAULT NULL COMMENT '插入时间',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='角色表';

-- ----------------------------
-- Records of t_sys_role
-- ----------------------------
BEGIN;
INSERT INTO `t_sys_role` VALUES (1, 'admin', '2017-11-14 14:31:35', '2017-11-14 14:31:38');
COMMIT;

-- ----------------------------
-- Table structure for t_sys_user
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_user`;
CREATE TABLE `t_sys_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(100) DEFAULT NULL COMMENT '用户名',
  `user_name` varchar(100) NOT NULL COMMENT '账户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `status` int(11) DEFAULT NULL COMMENT '用户状态 - DIC',
  `insert_time` timestamp NULL DEFAULT NULL COMMENT '插入时间',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户信息表';

-- ----------------------------
-- Records of t_sys_user
-- ----------------------------
BEGIN;
INSERT INTO `t_sys_user` VALUES (1, NULL, 'CC', '31c18c950cfec8395b96c89bc00d9e2b', NULL, '2017-11-13 14:51:21', '2017-11-13 14:51:24');
COMMIT;

-- ----------------------------
-- Triggers structure for table t_sys_dic_entity
-- ----------------------------
DROP TRIGGER IF EXISTS `t_insert_id`;
delimiter ;;
CREATE DEFINER = `root`@`127.0.0.1` TRIGGER `t_insert_id` BEFORE INSERT ON `t_sys_dic_entity` FOR EACH ROW begin
  set new.id = new.dic_id * 10000 + new.value;
end
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table t_sys_dic_entity
-- ----------------------------
DROP TRIGGER IF EXISTS `t_update_id`;
delimiter ;;
CREATE DEFINER = `root`@`127.0.0.1` TRIGGER `t_update_id` BEFORE UPDATE ON `t_sys_dic_entity` FOR EACH ROW begin
  set new.id = new.dic_id * 10000 + new.value;
end
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
