package com.dao;

import com.entity.JianshenleixingEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.JianshenleixingVO;
import com.entity.view.JianshenleixingView;


/**
 * 健身类型
 * 
 * @author 
 * @email 
 * @date 2021-02-25 11:11:15
 */
public interface JianshenleixingDao extends BaseMapper<JianshenleixingEntity> {
	
	List<JianshenleixingVO> selectListVO(@Param("ew") Wrapper<JianshenleixingEntity> wrapper);
	
	JianshenleixingVO selectVO(@Param("ew") Wrapper<JianshenleixingEntity> wrapper);
	
	List<JianshenleixingView> selectListView(@Param("ew") Wrapper<JianshenleixingEntity> wrapper);

	List<JianshenleixingView> selectListView(Pagination page,@Param("ew") Wrapper<JianshenleixingEntity> wrapper);
	
	JianshenleixingView selectView(@Param("ew") Wrapper<JianshenleixingEntity> wrapper);
	
}
