package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.JianshenleixingEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.JianshenleixingVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.JianshenleixingView;


/**
 * 健身类型
 *
 * @author 
 * @email 
 * @date 2021-02-25 11:11:15
 */
public interface JianshenleixingService extends IService<JianshenleixingEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<JianshenleixingVO> selectListVO(Wrapper<JianshenleixingEntity> wrapper);
   	
   	JianshenleixingVO selectVO(@Param("ew") Wrapper<JianshenleixingEntity> wrapper);
   	
   	List<JianshenleixingView> selectListView(Wrapper<JianshenleixingEntity> wrapper);
   	
   	JianshenleixingView selectView(@Param("ew") Wrapper<JianshenleixingEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<JianshenleixingEntity> wrapper);
   	
}

