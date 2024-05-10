package com.dao;

import com.entity.JianshenjiaolianEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.JianshenjiaolianVO;
import com.entity.view.JianshenjiaolianView;


/**
 * 健身教练
 * 
 * @author 
 * @email 
 * @date 2021-02-25 11:11:15
 */
public interface JianshenjiaolianDao extends BaseMapper<JianshenjiaolianEntity> {
	
	List<JianshenjiaolianVO> selectListVO(@Param("ew") Wrapper<JianshenjiaolianEntity> wrapper);
	
	JianshenjiaolianVO selectVO(@Param("ew") Wrapper<JianshenjiaolianEntity> wrapper);
	
	List<JianshenjiaolianView> selectListView(@Param("ew") Wrapper<JianshenjiaolianEntity> wrapper);

	List<JianshenjiaolianView> selectListView(Pagination page,@Param("ew") Wrapper<JianshenjiaolianEntity> wrapper);
	
	JianshenjiaolianView selectView(@Param("ew") Wrapper<JianshenjiaolianEntity> wrapper);
	
}
