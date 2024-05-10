package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.DiscussjianshenjiaolianEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.DiscussjianshenjiaolianVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.DiscussjianshenjiaolianView;


/**
 * 健身教练评论表
 *
 * @author 
 * @email 
 * @date 2021-02-25 11:11:15
 */
public interface DiscussjianshenjiaolianService extends IService<DiscussjianshenjiaolianEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DiscussjianshenjiaolianVO> selectListVO(Wrapper<DiscussjianshenjiaolianEntity> wrapper);
   	
   	DiscussjianshenjiaolianVO selectVO(@Param("ew") Wrapper<DiscussjianshenjiaolianEntity> wrapper);
   	
   	List<DiscussjianshenjiaolianView> selectListView(Wrapper<DiscussjianshenjiaolianEntity> wrapper);
   	
   	DiscussjianshenjiaolianView selectView(@Param("ew") Wrapper<DiscussjianshenjiaolianEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DiscussjianshenjiaolianEntity> wrapper);
   	
}

