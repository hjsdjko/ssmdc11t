package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.DiscussjianshenjiaolianDao;
import com.entity.DiscussjianshenjiaolianEntity;
import com.service.DiscussjianshenjiaolianService;
import com.entity.vo.DiscussjianshenjiaolianVO;
import com.entity.view.DiscussjianshenjiaolianView;

@Service("discussjianshenjiaolianService")
public class DiscussjianshenjiaolianServiceImpl extends ServiceImpl<DiscussjianshenjiaolianDao, DiscussjianshenjiaolianEntity> implements DiscussjianshenjiaolianService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DiscussjianshenjiaolianEntity> page = this.selectPage(
                new Query<DiscussjianshenjiaolianEntity>(params).getPage(),
                new EntityWrapper<DiscussjianshenjiaolianEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DiscussjianshenjiaolianEntity> wrapper) {
		  Page<DiscussjianshenjiaolianView> page =new Query<DiscussjianshenjiaolianView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<DiscussjianshenjiaolianVO> selectListVO(Wrapper<DiscussjianshenjiaolianEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public DiscussjianshenjiaolianVO selectVO(Wrapper<DiscussjianshenjiaolianEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<DiscussjianshenjiaolianView> selectListView(Wrapper<DiscussjianshenjiaolianEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DiscussjianshenjiaolianView selectView(Wrapper<DiscussjianshenjiaolianEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
