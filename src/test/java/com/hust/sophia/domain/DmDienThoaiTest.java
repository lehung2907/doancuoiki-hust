package com.hust.sophia.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.hust.sophia.web.rest.TestUtil;

public class DmDienThoaiTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DmDienThoai.class);
        DmDienThoai dmDienThoai1 = new DmDienThoai();
        dmDienThoai1.setId(1L);
        DmDienThoai dmDienThoai2 = new DmDienThoai();
        dmDienThoai2.setId(dmDienThoai1.getId());
        assertThat(dmDienThoai1).isEqualTo(dmDienThoai2);
        dmDienThoai2.setId(2L);
        assertThat(dmDienThoai1).isNotEqualTo(dmDienThoai2);
        dmDienThoai1.setId(null);
        assertThat(dmDienThoai1).isNotEqualTo(dmDienThoai2);
    }
}
