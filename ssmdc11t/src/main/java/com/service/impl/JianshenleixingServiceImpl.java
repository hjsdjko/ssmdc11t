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


import com.dao.JianshenleixingDao;
import com.entity.JianshenleixingEntity;
import com.service.JianshenleixingService;
import com.entity.vo.JianshenleixingVO;
import com.entity.view.JianshenleixingView;

@Service("jianshenleixingService")
public class JianshenleixingServiceImpl extends ServiceImpl<JianshenleixingDao, JianshenleixingEntity> implements JianshenleixingService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<JianshenleixingEntity> page = this.selectPage(
                new Query<JianshenleixingEntity>(params).getPage(),
                new EntityWrapper<JianshenleixingEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<JianshenleixingEntity> wrapper) {
		  Page<JianshenleixingView> page =new Query<JianshenleixingView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<JianshenleixingVO> selectListVO(Wrapper<JianshenleixingEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public JianshenleixingVO selectVO(Wrapper<JianshenleixingEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<JianshenleixingView> selectListView(Wrapper<JianshenleixingEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public JianshenleixingView selectView(Wrapper<JianshenleixingEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
